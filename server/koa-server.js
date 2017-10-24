'use strict';
import path from 'path';
import Koa from 'koa';
import createRouter from 'koa-router';
import sendFile from 'koa-sendfile';
const dirname = path.dirname(process.argv.find(arg => arg.endsWith('.js') && !arg.startsWith('-')));
const app    = new Koa();
const router = createRouter();
let types    = ['appcache', 'html', 'htm', 'js', 'locale.json', 'css', 'ico',
  'png', 'jpg', 'jpeg', 'svg', 'gif', 'woff', 'woff2', 'ttf', 'eot'];
if (process.argv.find(arg => arg === '--map')) {
  types = [...types, 'map'];
}
types.forEach(type =>
  router.get(`*/:name.${type}`, async(ctx) => {
    await sendFile(ctx, path.resolve(dirname,  './' + ctx.path));
  }));

router.get('*', async (ctx) => {
  await sendFile(ctx, path.resolve(dirname, 'index.html'));
});
app.use(router.routes()).use(router.allowedMethods());
//app.use(staticServer(path.join(__dirname,'public')));
app.listen(3000);