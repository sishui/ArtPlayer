if(!self.define){let s,a={};const e=(e,i)=>(e=new URL(e+".js",i).href,a[e]||new Promise((a=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=a,document.head.appendChild(s)}else s=e,importScripts(e),a()})).then((()=>{let s=a[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,b)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(a[l])return;let c={};const r=s=>e(s,l),n={module:{uri:l},exports:c,require:r};a[l]=Promise.all(i.map((s=>n[s]||r(s)))).then((s=>(b(...s),c)))}}define(["./workbox-7d6a3f4d"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/css/normalize.css",revision:"be7f3425b44480dcf3aab3408f632f37"},{url:"assets/css/style.css",revision:"20e47e262edc736a2328052a6452a9bc"},{url:"assets/example/danmuku.js",revision:"f012468eee3ee0391dc00dfb0859cb1d"},{url:"assets/example/index.js",revision:"52e5c0679e9ed6643cdc2e58849836e8"},{url:"assets/example/thumbnail.js",revision:"ed1119d0517accdea6b88aa08cd4fc27"},{url:"assets/img/danmu-off.svg",revision:"a1483de76b68dd12a2fdf2c3734537ea"},{url:"assets/img/danmu-on.svg",revision:"1b846589a581e9d2ed720973d00a8a38"},{url:"assets/img/indicator.svg",revision:"696037ccd6fb7db7c68d82d2c69e7e6c"},{url:"assets/img/logo.png",revision:"113f758a35e9c71b8d9c41240da8233b"},{url:"assets/img/state.svg",revision:"2e9bac37536c46c09a38e74a480b56c6"},{url:"assets/img/subtitle.svg",revision:"9a231c6167f7a8b168b5f19cc892b170"},{url:"assets/js/common.js",revision:"4875691f7a403d391c1b9fcdb874aa06"},{url:"assets/js/console.js",revision:"4e9a2c80679b6bbf78a4809a4a90f64a"},{url:"assets/js/JavascriptSubtitlesOctopus/subtitles-octopus-worker.js",revision:"cef7e5f6ef27a8e01d7c1bcb78cbbe4d"},{url:"assets/js/JavascriptSubtitlesOctopus/subtitles-octopus.js",revision:"a02d9bcf0639259b92b1c8ddfc45b994"},{url:"assets/js/polyfill/core.js",revision:"1d2194332562ff4194b431f2bad8ad68"},{url:"assets/js/polyfill/encoding-indexes.js",revision:"50f27403be5972eae4831f5b69db1f80"},{url:"assets/js/polyfill/encoding.js",revision:"022884ab2a5bd42b6f4fff580fa0dd34"},{url:"assets/js/polyfill/fetch.polyfill.js",revision:"f625f62b3249b03ef6d9aef1aa375342"},{url:"assets/js/vconsole.min.js",revision:"bac6b63f324b1279662529339227cba2"},{url:"assets/js/vs/base/worker/workerMain.js",revision:"ff1e00116d48f10b29a7f4f0deac2cd3"},{url:"assets/js/vs/basic-languages/abap/abap.js",revision:"0d31790a1a820013ebfceaaea520086e"},{url:"assets/js/vs/basic-languages/apex/apex.js",revision:"7ed571a41e7a0f49e3813733ee9668ab"},{url:"assets/js/vs/basic-languages/azcli/azcli.js",revision:"2c95f109efa42b39efd112e1ca3f6156"},{url:"assets/js/vs/basic-languages/bat/bat.js",revision:"3a19616507d8d1f534c6155dd45075b7"},{url:"assets/js/vs/basic-languages/bicep/bicep.js",revision:"a454b074c4897916902a31bc7488c7c6"},{url:"assets/js/vs/basic-languages/cameligo/cameligo.js",revision:"714bc3d62760814c66d2722403956093"},{url:"assets/js/vs/basic-languages/clojure/clojure.js",revision:"bc3dfd6ec24e73dd26c7acb5fdf0026e"},{url:"assets/js/vs/basic-languages/coffee/coffee.js",revision:"72268e931cec85bc41f6677416e86cbd"},{url:"assets/js/vs/basic-languages/cpp/cpp.js",revision:"400136ec6edf93a21103ab54fe244b44"},{url:"assets/js/vs/basic-languages/csharp/csharp.js",revision:"60763afe31e9a27b3e11f31ca07222d0"},{url:"assets/js/vs/basic-languages/csp/csp.js",revision:"7c7a0ecfa43e63dea1c5c3b90e3669ee"},{url:"assets/js/vs/basic-languages/css/css.js",revision:"6ee9d8b753ab02e86d2fef1cd6839bae"},{url:"assets/js/vs/basic-languages/dart/dart.js",revision:"994c907e6e2fca9831c70fb220a8dfe7"},{url:"assets/js/vs/basic-languages/dockerfile/dockerfile.js",revision:"886100cd736f23bfcdf61029439ebb91"},{url:"assets/js/vs/basic-languages/ecl/ecl.js",revision:"59c4e667668ebbb528ba64fd2b76411c"},{url:"assets/js/vs/basic-languages/elixir/elixir.js",revision:"9adf3da05ba73c8728db04aa24479830"},{url:"assets/js/vs/basic-languages/flow9/flow9.js",revision:"07f962e581808968eaf81b4757ba427d"},{url:"assets/js/vs/basic-languages/fsharp/fsharp.js",revision:"4a059944d9de46a22b1e7f3b636beb98"},{url:"assets/js/vs/basic-languages/go/go.js",revision:"1e78e6e22eca1bf5ad47108dead26490"},{url:"assets/js/vs/basic-languages/graphql/graphql.js",revision:"33366aac3f03b0c919818dff9e228bad"},{url:"assets/js/vs/basic-languages/handlebars/handlebars.js",revision:"9a05aa526495f0a1e241f3ac142e91a9"},{url:"assets/js/vs/basic-languages/hcl/hcl.js",revision:"710a5636d53b53e1290873211ddb6a9e"},{url:"assets/js/vs/basic-languages/html/html.js",revision:"2b130bc85c8c8646e5bea546d14a0b41"},{url:"assets/js/vs/basic-languages/ini/ini.js",revision:"2c52fccc7378467c65c40d246cbd05a4"},{url:"assets/js/vs/basic-languages/java/java.js",revision:"b6bd764730176bec564b8ed428790b5b"},{url:"assets/js/vs/basic-languages/javascript/javascript.js",revision:"a2e9534e6798dec260a05c3af6995ab6"},{url:"assets/js/vs/basic-languages/julia/julia.js",revision:"31b9ccddbca591c0a144e2854ad1df6f"},{url:"assets/js/vs/basic-languages/kotlin/kotlin.js",revision:"47f9a5dda454ed959e63ad41d7ed5d0f"},{url:"assets/js/vs/basic-languages/less/less.js",revision:"141d7e275a8415231fbd59f8113923b3"},{url:"assets/js/vs/basic-languages/lexon/lexon.js",revision:"8c87d858060a5a0a3f5d865f4e0f3b6e"},{url:"assets/js/vs/basic-languages/liquid/liquid.js",revision:"7f54c34250cd122147b9f479b0df9ad7"},{url:"assets/js/vs/basic-languages/lua/lua.js",revision:"00eb2f7a1c0ff215b1412b2f7d547293"},{url:"assets/js/vs/basic-languages/m3/m3.js",revision:"3fea60c45ed2c3cccfd37c02ec8eb611"},{url:"assets/js/vs/basic-languages/markdown/markdown.js",revision:"a17bd15cd9a17844d5c7533bb75aa75c"},{url:"assets/js/vs/basic-languages/mips/mips.js",revision:"b8e1fe126721a24f76b063625f00a99d"},{url:"assets/js/vs/basic-languages/msdax/msdax.js",revision:"cbb4a2dcff92b9bdbe236b176628d71e"},{url:"assets/js/vs/basic-languages/mysql/mysql.js",revision:"aa1c6fe8896c11c04822fa56609a2ed9"},{url:"assets/js/vs/basic-languages/objective-c/objective-c.js",revision:"6598c5e2591909635986178ca0273677"},{url:"assets/js/vs/basic-languages/pascal/pascal.js",revision:"373d426bb58b2a8fb1d14db8185cd34d"},{url:"assets/js/vs/basic-languages/pascaligo/pascaligo.js",revision:"eb41b781bbbf5bfa1cef31c666380302"},{url:"assets/js/vs/basic-languages/perl/perl.js",revision:"00ef4985b150a11a8e55632baa389942"},{url:"assets/js/vs/basic-languages/pgsql/pgsql.js",revision:"ab269b493eb717b4b49248569c63ba94"},{url:"assets/js/vs/basic-languages/php/php.js",revision:"5193d1ca2571967f42dffc9b0ec4d77c"},{url:"assets/js/vs/basic-languages/pla/pla.js",revision:"015b1b777840e2ff60d7d05da0c5833b"},{url:"assets/js/vs/basic-languages/postiats/postiats.js",revision:"0bebc84a5a7934887c44d81df346fa5b"},{url:"assets/js/vs/basic-languages/powerquery/powerquery.js",revision:"7a73f17d3e48b9a8c55492aea11a7e89"},{url:"assets/js/vs/basic-languages/powershell/powershell.js",revision:"6fa0bf908c12ff12186dc2f6948b7e68"},{url:"assets/js/vs/basic-languages/protobuf/protobuf.js",revision:"14343c432c7bc348af5b4a577906a338"},{url:"assets/js/vs/basic-languages/pug/pug.js",revision:"03e47508816771cbbc9dac8bb2cbba68"},{url:"assets/js/vs/basic-languages/python/python.js",revision:"020e23b1bdb676936ebe868a21a653b7"},{url:"assets/js/vs/basic-languages/qsharp/qsharp.js",revision:"5d8f229a1be1fec9c98532584c05bbf7"},{url:"assets/js/vs/basic-languages/r/r.js",revision:"4b585406c67d68af9cec6882d7b71b68"},{url:"assets/js/vs/basic-languages/razor/razor.js",revision:"4106dc94db262064c0f993ee27e1f1e6"},{url:"assets/js/vs/basic-languages/redis/redis.js",revision:"0dd6e471ef6fda3a0f9d9526c65dcd8c"},{url:"assets/js/vs/basic-languages/redshift/redshift.js",revision:"85edaf030683e5ba5e97a63df1fabd22"},{url:"assets/js/vs/basic-languages/restructuredtext/restructuredtext.js",revision:"8a5eec0e86d673a4b045d1b76fd178da"},{url:"assets/js/vs/basic-languages/ruby/ruby.js",revision:"9301210ab438575bce0f3b807dde974f"},{url:"assets/js/vs/basic-languages/rust/rust.js",revision:"e79c2eac7164955ca1f6f18a0711bdff"},{url:"assets/js/vs/basic-languages/sb/sb.js",revision:"a5b5f477d4bb446c3656cb3004e10a13"},{url:"assets/js/vs/basic-languages/scala/scala.js",revision:"4b05491d91202206f8e6cbb7f0552464"},{url:"assets/js/vs/basic-languages/scheme/scheme.js",revision:"642c56a7f33709481000481c1cfacf3f"},{url:"assets/js/vs/basic-languages/scss/scss.js",revision:"bb6b3db21c6aec0eaa5154231fd022cb"},{url:"assets/js/vs/basic-languages/shell/shell.js",revision:"c58d441824914a525210f72d05d4deae"},{url:"assets/js/vs/basic-languages/solidity/solidity.js",revision:"ab530c388e337be309fe44c9fe3b9101"},{url:"assets/js/vs/basic-languages/sophia/sophia.js",revision:"d2fb2b60b1701b26ef21dfd69bfd4bb3"},{url:"assets/js/vs/basic-languages/sparql/sparql.js",revision:"04ecb7894faf838af73f6e45ec5e849b"},{url:"assets/js/vs/basic-languages/sql/sql.js",revision:"e902f67b2ae9356456eb80f799935743"},{url:"assets/js/vs/basic-languages/st/st.js",revision:"184cf06d81cc6db926108652253788a8"},{url:"assets/js/vs/basic-languages/swift/swift.js",revision:"257edb0d4785f7dc2b87d40b9ffd9f2a"},{url:"assets/js/vs/basic-languages/systemverilog/systemverilog.js",revision:"5f463d344d22b4c25db7427863ffc785"},{url:"assets/js/vs/basic-languages/tcl/tcl.js",revision:"1b87289b43d801c746f0983263f159be"},{url:"assets/js/vs/basic-languages/twig/twig.js",revision:"8e8e7e5b4fe4530a376e1fd9871bb3c0"},{url:"assets/js/vs/basic-languages/typescript/typescript.js",revision:"9550dfbf82d3d02b4085778bdc2f5144"},{url:"assets/js/vs/basic-languages/vb/vb.js",revision:"98ea1d711b815f7e0058403cfb2f47f7"},{url:"assets/js/vs/basic-languages/xml/xml.js",revision:"843ca49336b9c8afad3cebe31e3499ba"},{url:"assets/js/vs/basic-languages/yaml/yaml.js",revision:"e65d368240a0a33f5dd8517042d22baf"},{url:"assets/js/vs/editor/editor.main.css",revision:"30994a557d1488ddd0e46487aa9282f1"},{url:"assets/js/vs/editor/editor.main.nls.de.js",revision:"5ac795573e517a9f7cd61f94f5ba53b6"},{url:"assets/js/vs/editor/editor.main.nls.es.js",revision:"18c8b0b6dcc1916afb3e31d4ba05a424"},{url:"assets/js/vs/editor/editor.main.nls.fr.js",revision:"e1e0a8bc716d8717a1c88333f03ad98a"},{url:"assets/js/vs/editor/editor.main.nls.it.js",revision:"b6602f2a32698f3997942dbbf8bdc78a"},{url:"assets/js/vs/editor/editor.main.nls.ja.js",revision:"41b561666c3c30da46e5e11460968596"},{url:"assets/js/vs/editor/editor.main.nls.js",revision:"be9bc3c87be5debf24bb958b0ad7b061"},{url:"assets/js/vs/editor/editor.main.nls.ko.js",revision:"59aa975695c2f9fef08fcf66c6fb5837"},{url:"assets/js/vs/editor/editor.main.nls.ru.js",revision:"f6ac240c2d24025c522e106784940f10"},{url:"assets/js/vs/editor/editor.main.nls.zh-cn.js",revision:"c82a3dc31d6fb1934849c477ccea7e52"},{url:"assets/js/vs/editor/editor.main.nls.zh-tw.js",revision:"ec3212f2680c449b23a3f4d5d5856f90"},{url:"assets/js/vs/language/css/cssMode.js",revision:"09d7edb49c180ae4361016eff500b956"},{url:"assets/js/vs/language/css/cssWorker.js",revision:"19c30b90021b645cb3bf1af079c818ec"},{url:"assets/js/vs/language/html/htmlMode.js",revision:"dad776df2f75d75a10246ebe1318796e"},{url:"assets/js/vs/language/html/htmlWorker.js",revision:"8f26bf62f45fa6b3099c6bb95a269791"},{url:"assets/js/vs/language/json/jsonMode.js",revision:"4a8b21fa884d86cfa39534e0fd72a936"},{url:"assets/js/vs/language/json/jsonWorker.js",revision:"994d228233541bafc0540bb0f6f678cc"},{url:"assets/js/vs/language/typescript/tsMode.js",revision:"3735e7b6c27ed7880c641c572d40b4c0"},{url:"assets/js/vs/loader.js",revision:"a223df1cdea17a435e1ab7bc6761ddd8"},{url:"assets/sample/layer.png",revision:"73966368866d0ea547be0799c99a2cf4"},{url:"assets/sample/poster.jpg",revision:"01421f680dfa206faf700ac60e394c3b"},{url:"assets/sample/thumbnails.png",revision:"773f00bee2e4b58eb7418bc6318991f9"},{url:"assets/sample/thumbnails/thumbnail_1.jpg",revision:"890d671ff24609fe664591e532369ef0"},{url:"assets/sample/thumbnails/thumbnail_10.jpg",revision:"a7663ab4dfdf9193324209308ffbb7a5"},{url:"assets/sample/thumbnails/thumbnail_11.jpg",revision:"a08bdfedcc3aeac05f016e56a689653e"},{url:"assets/sample/thumbnails/thumbnail_12.jpg",revision:"1ced197e631315c5e9382d9a96ccfe46"},{url:"assets/sample/thumbnails/thumbnail_13.jpg",revision:"bf23e98f786d724bccda04ad09aec530"},{url:"assets/sample/thumbnails/thumbnail_14.jpg",revision:"2c0c50d2ba6ec12d5a2114f233cb8feb"},{url:"assets/sample/thumbnails/thumbnail_15.jpg",revision:"742f369717cf8df7e8571d3a5d0ac237"},{url:"assets/sample/thumbnails/thumbnail_16.jpg",revision:"2a20d4f23e08f20e70b43c3b239b2d63"},{url:"assets/sample/thumbnails/thumbnail_17.jpg",revision:"0111a62a4d1d1d33fce9353c7b4a7c91"},{url:"assets/sample/thumbnails/thumbnail_18.jpg",revision:"f3b04f2dfd5637a6b776263366ad4e4f"},{url:"assets/sample/thumbnails/thumbnail_19.jpg",revision:"2edd56f02f4be9ad1cdafe6fb5d84b26"},{url:"assets/sample/thumbnails/thumbnail_2.jpg",revision:"5f10723ac5c3db6026aa412e9a1b502d"},{url:"assets/sample/thumbnails/thumbnail_20.jpg",revision:"cfa252ef04b723cef9cc55975ba37cc7"},{url:"assets/sample/thumbnails/thumbnail_21.jpg",revision:"4568c38ddede0ac141c63c48a67e8476"},{url:"assets/sample/thumbnails/thumbnail_22.jpg",revision:"da810e7381acf11fdc0f271b42545d6d"},{url:"assets/sample/thumbnails/thumbnail_23.jpg",revision:"3f2ec2efaeff3179d5deb83012cd1a8c"},{url:"assets/sample/thumbnails/thumbnail_24.jpg",revision:"c3076ef8687470207a1efc92a7064350"},{url:"assets/sample/thumbnails/thumbnail_25.jpg",revision:"1bdf905f9d9a480ab069a6ba9557deb0"},{url:"assets/sample/thumbnails/thumbnail_26.jpg",revision:"12bea1094da0ca575b7cb69b27f83193"},{url:"assets/sample/thumbnails/thumbnail_27.jpg",revision:"51ea6f2bf02352123ab4f82e1689d515"},{url:"assets/sample/thumbnails/thumbnail_28.jpg",revision:"23f6c6910d48bec39154cb4ec89e43a2"},{url:"assets/sample/thumbnails/thumbnail_29.jpg",revision:"9911d20ad159762c487ceaa1f94fe55e"},{url:"assets/sample/thumbnails/thumbnail_3.jpg",revision:"590503a9cd098b113e4ad12aa899289f"},{url:"assets/sample/thumbnails/thumbnail_30.jpg",revision:"06c29411daedee89327b416a10689f45"},{url:"assets/sample/thumbnails/thumbnail_31.jpg",revision:"afc3783603b2f1616b5c2847a7a0c1d2"},{url:"assets/sample/thumbnails/thumbnail_32.jpg",revision:"146450d476a314e4c642b9c4fc7f9985"},{url:"assets/sample/thumbnails/thumbnail_33.jpg",revision:"397ec56c329d4dab7e137b1ca34bda9a"},{url:"assets/sample/thumbnails/thumbnail_34.jpg",revision:"f8acf52926bd804923183c82e7afbd46"},{url:"assets/sample/thumbnails/thumbnail_35.jpg",revision:"da27980a581f6a36874135ded47d6379"},{url:"assets/sample/thumbnails/thumbnail_36.jpg",revision:"0d832f8e56d49e08b7d0071fce424d74"},{url:"assets/sample/thumbnails/thumbnail_37.jpg",revision:"d6df71542bee77d04b5cd7a4df4f53d1"},{url:"assets/sample/thumbnails/thumbnail_38.jpg",revision:"ff247fdc930dfbb5711292870ea2c2ca"},{url:"assets/sample/thumbnails/thumbnail_39.jpg",revision:"cf9f9280e85a4958478bd03d8f51b87a"},{url:"assets/sample/thumbnails/thumbnail_4.jpg",revision:"a42f2b695d6e83b8f55354e4969b6aae"},{url:"assets/sample/thumbnails/thumbnail_40.jpg",revision:"07b27e70b7b4a125aa6cebeb4bc974d1"},{url:"assets/sample/thumbnails/thumbnail_41.jpg",revision:"f59aa668eef771af88ba970943b2b76d"},{url:"assets/sample/thumbnails/thumbnail_42.jpg",revision:"7ec9856c7ece414262b4c048e2d8a67e"},{url:"assets/sample/thumbnails/thumbnail_43.jpg",revision:"40fbf64bceb65aaf250d56041414c615"},{url:"assets/sample/thumbnails/thumbnail_44.jpg",revision:"63ebb0f8b33273037ea44a014ba1512e"},{url:"assets/sample/thumbnails/thumbnail_45.jpg",revision:"77c0cc31fa7022becdac5cc35b97e040"},{url:"assets/sample/thumbnails/thumbnail_46.jpg",revision:"8f35febea549973aac957b95a3f6b450"},{url:"assets/sample/thumbnails/thumbnail_47.jpg",revision:"8511eed5538ead79decdd473f4e648dc"},{url:"assets/sample/thumbnails/thumbnail_48.jpg",revision:"8450abbd5c545c5e20b378f651f18ebc"},{url:"assets/sample/thumbnails/thumbnail_49.jpg",revision:"8eaf81670a54dd2945ff9152f1d36e50"},{url:"assets/sample/thumbnails/thumbnail_5.jpg",revision:"ef90dd12b9c5eb0ad3b205c844045416"},{url:"assets/sample/thumbnails/thumbnail_50.jpg",revision:"2dae99bab8a8a0cac445c483c8d5524e"},{url:"assets/sample/thumbnails/thumbnail_51.jpg",revision:"4c3a94aeafa5102d8f999da8db05b8ac"},{url:"assets/sample/thumbnails/thumbnail_52.jpg",revision:"b63727ad0ea2de79b14f034140f23b6c"},{url:"assets/sample/thumbnails/thumbnail_53.jpg",revision:"b14e77f7ac281e6791f2dd6a897635f4"},{url:"assets/sample/thumbnails/thumbnail_54.jpg",revision:"84d5f6ac22f76b1a80b426647205314d"},{url:"assets/sample/thumbnails/thumbnail_55.jpg",revision:"3f8c9153990819828a0c40d8b6f93c96"},{url:"assets/sample/thumbnails/thumbnail_56.jpg",revision:"e321896fd577815dad0c224e3c0c99b6"},{url:"assets/sample/thumbnails/thumbnail_57.jpg",revision:"d04385f715f75c105034bcf1f1ea169c"},{url:"assets/sample/thumbnails/thumbnail_58.jpg",revision:"bb0abc4058799551e057dbe525a8032c"},{url:"assets/sample/thumbnails/thumbnail_59.jpg",revision:"0a641a8e43ebfd9982acaffeb772e41c"},{url:"assets/sample/thumbnails/thumbnail_6.jpg",revision:"5068cbd2ba1e7112f09e601126787082"},{url:"assets/sample/thumbnails/thumbnail_60.jpg",revision:"a3485360065e8aee489314f9fb6105ed"},{url:"assets/sample/thumbnails/thumbnail_7.jpg",revision:"9107a2b9ef154590427f4edd30a7af61"},{url:"assets/sample/thumbnails/thumbnail_8.jpg",revision:"0f22ef7e53e42d47d260707b7a4416eb"},{url:"assets/sample/thumbnails/thumbnail_9.jpg",revision:"d2dd29ef088dcfa125565a6e0fe1b834"}],{})}));
