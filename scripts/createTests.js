import glob from 'glob';
import { join } from 'path';
import { parse } from 'node-html-parser';
import { format as _format } from 'prettier';
import { readFileSync, writeFileSync } from 'fs';

const htmls = glob
    .sync(join(process.cwd(), 'docs/document/zh-cn/**/*.html'))
    .filter((item) => !item.includes('libraries'))
    .map((item) => readFileSync(item, 'utf-8'))
    .map((item) =>
        parse(item, {
            lowerCaseTagName: false,
            comment: true,
            blockTextElements: {
                script: false,
                noscript: false,
                style: false,
                pre: true,
            },
        }),
    )
    .map((item) => item.querySelectorAll('pre'))
    .map((item) => item.map((pre) => parse(pre.innerHTML).textContent))
    .flat(Infinity)
    .filter((item) => item.trim().startsWith('var art'))
    .map((item) => item.replace(/\/assets/g, './assets'))
    .map((item) => item.replace(/\s{3}/g, '\n'));

const tests = `
describe('Document', function() {
    afterEach(function() {
        [...Artplayer.instances].forEach(art => {
            art.destroy(true);
        });
    });

    function testAll(art, done) {
        let isDone = false;
        art.on('ready', () => {
            expect(art.id).to.be.an('number');

            if (!isDone) {
                isDone = true;
                done();
            }
        });

        art.on('video:error', () => {
            expect(art.id).to.be.an('number');

            if (!isDone) {
                isDone = true;
                done();
            }
        });

        setTimeout(() => {
            expect(art.id).to.be.an('number');

            if (!isDone) {
                isDone = true;
                done();
            }
        }, 1000);
    }

    ${htmls
        .map((item, index) => {
            return `
    it('Test${index}', function(done) {
        ${item}

        testAll(art, done);
    });`;
        })
        .join('\n\n')}
});
`;

const format = _format(tests, { semi: true, parser: 'babel' });
writeFileSync(join(process.cwd(), 'test/document.test.js'), format);