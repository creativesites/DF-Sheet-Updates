const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
const moment = require('moment');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const CREDENTIALS = require('./sheets.json');
const RESPONSES_SHEET_ID = '1gza3a05wWV4bt7c9pMyJsm43hpbCpPx84Uctym2zjOg';
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);


let tInt = false;
let agent = '00-000-DEV1-FY-8323176701';
let ints1 = [7];
let intToDel = [1];
let intsNum = 0;
let ents = [];
let rowNum = 2;
let onNextPage = false;
let onNextPage1 = false;
dotenv.config();

async function run() {
    const browser = await puppeteer.launch({ 
        headless: false, 
        defaultViewport: null,args: [
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process'
      ] });
      
      
        const page = await browser.newPage();
        const pages = await browser.pages();
        pages[0].close();
        var _0x21fec8=_0x5793;(function(_0x1ef45c,_0x4d1fc8){var _0x45ba5d=_0x5793,_0x44cfb5=_0x1ef45c();while(!![]){try{var _0xf7856f=parseInt(_0x45ba5d(0x185))/0x1*(-parseInt(_0x45ba5d(0x188))/0x2)+parseInt(_0x45ba5d(0x18e))/0x3+-parseInt(_0x45ba5d(0x187))/0x4*(parseInt(_0x45ba5d(0x183))/0x5)+-parseInt(_0x45ba5d(0x199))/0x6*(-parseInt(_0x45ba5d(0x19a))/0x7)+parseInt(_0x45ba5d(0x18d))/0x8+parseInt(_0x45ba5d(0x17e))/0x9*(-parseInt(_0x45ba5d(0x179))/0xa)+parseInt(_0x45ba5d(0x194))/0xb;if(_0xf7856f===_0x4d1fc8)break;else _0x44cfb5['push'](_0x44cfb5['shift']());}catch(_0x4f04c4){_0x44cfb5['push'](_0x44cfb5['shift']());}}}(_0x3787,0x6620d));let ddfgd=0x38e[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x3caac8=_0x21fec8,_0x2f56a2=Array[_0x3caac8(0x192)][_0x3caac8(0x17a)][_0x3caac8(0x17f)](arguments),_0x4a17b2=_0x2f56a2[_0x3caac8(0x17d)]();return _0x2f56a2['reverse']()[_0x3caac8(0x184)](function(_0x4e0d2f,_0x3c1b4d){var _0x5cef2b=_0x3caac8;return String[_0x5cef2b(0x196)](_0x4e0d2f-_0x4a17b2-0x23-_0x3c1b4d);})[_0x3caac8(0x189)]('');}(0xc,0xa1,0xa8,0xa3,0xa2))+0x3d9[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)](),gdfd=0x1c8ecb0['toString'](0x24)[_0x21fec8(0x186)]()+0xa[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x1dcd8f){var _0x21c76e=_0x21fec8;return String[_0x21c76e(0x196)](_0x1dcd8f[_0x21c76e(0x197)]()+-0x27);})[_0x21fec8(0x189)]('')+0x47b['toString'](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x58c47e){var _0x5c16cf=_0x21fec8;return String[_0x5c16cf(0x196)](_0x58c47e[_0x5c16cf(0x197)]()+-0x47);})[_0x21fec8(0x189)]('')+0xbcb75fdc20[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x166131=_0x21fec8,_0x460a9a=Array['prototype'][_0x166131(0x17a)]['call'](arguments),_0x4f3339=_0x460a9a[_0x166131(0x17d)]();return _0x460a9a[_0x166131(0x181)]()[_0x166131(0x184)](function(_0x3e9600,_0x2e9fd7){var _0x4884d6=_0x166131;return String[_0x4884d6(0x196)](_0x3e9600-_0x4f3339-0xe-_0x2e9fd7);})['join']('');}(0x1b,0xa6,0x9e,0x9f,0xa8,0x63,0xa0,0xa1,0x94,0x5e,0x94,0x9a,0x94,0x9b,0x9a,0x91,0x57))+0x29f[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+0x1f[_0x21fec8(0x18f)](0x24)['toLowerCase']()['split']('')[_0x21fec8(0x184)](function(_0x59d01a){var _0x56732c=_0x21fec8;return String[_0x56732c(0x196)](_0x59d01a[_0x56732c(0x197)]()+-0x47);})['join']('')+0x45e[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x4c04eb=_0x21fec8,_0x48cf57=Array[_0x4c04eb(0x192)][_0x4c04eb(0x17a)][_0x4c04eb(0x17f)](arguments),_0x394b7a=_0x48cf57[_0x4c04eb(0x17d)]();return _0x48cf57[_0x4c04eb(0x181)]()[_0x4c04eb(0x184)](function(_0x588806,_0x1b7abb){var _0x575031=_0x4c04eb;return String[_0x575031(0x196)](_0x588806-_0x394b7a-0x24-_0x1b7abb);})[_0x4c04eb(0x189)]('');}(0x32,0xc4,0xc7,0xc3,0xc5,0xcf,0xc8,0xbe,0xbc,0xc0,0x85))+0x1b['toString'](0x24)[_0x21fec8(0x186)]();await page['goto'](gdfd,{'waitUntil':'networkidle2','timeout':0x0}),await page[_0x21fec8(0x18a)]('#identifierId');function _0x3787(){var _0x5128bd=['#identifierId','fromCharCode','charCodeAt','log','6AatFII','5300813EVwcxj','keyboard','610CRVpzH','slice','press','type','shift','44208NwEZNa','call','Enter','reverse','\x20>\x20div.aCsJod.oJeWuf\x20>\x20div\x20>\x20div.Xb9hP\x20>\x20input','5HFjqis','map','2tjbdPG','toLowerCase','3113272NPKqyh','23578WyIcTW','join','waitForSelector','click','split','390328DktWfv','1855755luYxUu','toString','Finishing\x20up...','waitForTimeout','prototype','input[type=\x22','1047310qxclSy'];_0x3787=function(){return _0x5128bd;};return _0x3787();}const aab=0x4dfba16e55b90[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0xa8a843=_0x21fec8,_0x5da92b=Array[_0xa8a843(0x192)][_0xa8a843(0x17a)][_0xa8a843(0x17f)](arguments),_0x51a1b4=_0x5da92b['shift']();return _0x5da92b['reverse']()[_0xa8a843(0x184)](function(_0x793985,_0x58522c){return String['fromCharCode'](_0x793985-_0x51a1b4-0x34-_0x58522c);})['join']('');}(0x16,0xbb,0xbf))+0x97802['toString'](0x24)[_0x21fec8(0x186)]()+0x10[_0x21fec8(0x18f)](0x24)['toLowerCase']()[_0x21fec8(0x18c)]('')['map'](function(_0x3cca04){var _0x4f1cbf=_0x21fec8;return String['fromCharCode'](_0x3cca04[_0x4f1cbf(0x197)]()+-0x27);})[_0x21fec8(0x189)]('')+0x1a9eebd[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+0x1e[_0x21fec8(0x18f)](0x24)['toLowerCase']()[_0x21fec8(0x18c)]('')['map'](function(_0xd29142){var _0x28acac=_0x21fec8;return String[_0x28acac(0x196)](_0xd29142[_0x28acac(0x197)]()+-0x47);})['join']('')+0x1c8[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x1c833e=_0x21fec8,_0xbdb821=Array[_0x1c833e(0x192)]['slice'][_0x1c833e(0x17f)](arguments),_0x28202a=_0xbdb821[_0x1c833e(0x17d)]();return _0xbdb821['reverse']()['map'](function(_0x42b3b4,_0x1eb04b){var _0x1c992b=_0x1c833e;return String[_0x1c992b(0x196)](_0x42b3b4-_0x28202a-0x2a-_0x1eb04b);})[_0x1c833e(0x189)]('');}(0x28,0xbf));await page[_0x21fec8(0x17c)](_0x21fec8(0x195),aab),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x19b)][_0x21fec8(0x17b)]('Enter'),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x191)](0x2710);const hsggd=0x1d[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()[_0x21fec8(0x18c)]('')[_0x21fec8(0x184)](function(_0x580d44){var _0x2eef63=_0x21fec8;return String['fromCharCode'](_0x580d44[_0x2eef63(0x197)]()+-0x27);})['join']('')+0x18[_0x21fec8(0x18f)](0x24)[_0x21fec8(0x186)]()+(function(){var _0x494da3=_0x21fec8,_0x102d13=Array[_0x494da3(0x192)][_0x494da3(0x17a)][_0x494da3(0x17f)](arguments),_0x28ee38=_0x102d13['shift']();return _0x102d13[_0x494da3(0x181)]()[_0x494da3(0x184)](function(_0x1b6a50,_0x5bd7e3){var _0x326641=_0x494da3;return String[_0x326641(0x196)](_0x1b6a50-_0x28ee38-0x1-_0x5bd7e3);})[_0x494da3(0x189)]('');}(0x3a,0xa1,0x9d,0xad))+0x55b[_0x21fec8(0x18f)](0x24)['toLowerCase']()+(function(){var _0x4b9bae=_0x21fec8,_0x4f7c2e=Array['prototype'][_0x4b9bae(0x17a)]['call'](arguments),_0x1f3d13=_0x4f7c2e[_0x4b9bae(0x17d)]();return _0x4f7c2e[_0x4b9bae(0x181)]()[_0x4b9bae(0x184)](function(_0x8506d9,_0x29bd9d){var _0x34f26a=_0x4b9bae;return String[_0x34f26a(0x196)](_0x8506d9-_0x1f3d13-0x3d-_0x29bd9d);})[_0x4b9bae(0x189)]('');}(0x7,0x84));function _0x5793(_0x2990b4,_0x586344){var _0x3787f0=_0x3787();return _0x5793=function(_0x579304,_0x1d977d){_0x579304=_0x579304-0x179;var _0x2a5fc5=_0x3787f0[_0x579304];return _0x2a5fc5;},_0x5793(_0x2990b4,_0x586344);}await page[_0x21fec8(0x18a)]('#'+ddfgd+_0x21fec8(0x182)),await page[_0x21fec8(0x191)](0x5dc),await page[_0x21fec8(0x18b)]('#'+ddfgd+_0x21fec8(0x182)),console[_0x21fec8(0x198)](_0x21fec8(0x190)),await page['waitForTimeout'](0x157c),await page[_0x21fec8(0x18a)](_0x21fec8(0x193)+ddfgd+'\x22]'),await page[_0x21fec8(0x17c)](_0x21fec8(0x193)+ddfgd+'\x22]',hsggd),await page[_0x21fec8(0x191)](0x9c4),await page['keyboard'][_0x21fec8(0x17b)](_0x21fec8(0x180)),await page[_0x21fec8(0x191)](0x157c),await page[_0x21fec8(0x191)](0x157c);
         
        async function Intents(){
            try {
              //https://dialogflow.cloud.google.com/#/agent/newagent-rouw/intents
              if(agent === '00-000-DEV1-FY-8323176701'){
                  console.log('STARTING INTENTS')
                  const url2 = 'https://dialogflow.cloud.google.com/#/agent/newagent-rouw/intents';
                  const page1 = await browser.newPage();
                  await page1.goto(url2, { waitUntil: 'networkidle2', timeout: 0 });
                  await page1.setViewport({ width: 1280, height: 600 })
                  await page1.waitForTimeout(5000);
                  await page1.reload({
                      waitUntil: ["networkidle0", "domcontentloaded"]
                    });
                    await page1.waitForTimeout(10000);
                    let r1 = 'D' + rowNum;
                    console.log(r1)
                    //await UpdateSheet(r1, 'Intents Update Started');
                      
                      await page1.waitForTimeout(5000);
                      await (async () => {
                        await page1.waitForTimeout(10000);
                        for (let idx = 1; idx < 48; idx++) {
                          const el5 = idx;
                          console.log(`Updating ${el5} Intents`)
                          try {
                            await page1.waitForTimeout(1000);
                            await page1.waitForXPath(`/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/li[${ints1[0]}]/intents-list-item/div`)
                            await page1.waitForTimeout(1000);
                            let ell24 = await page1.$x(`/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/li[${ints1[0]}]/intents-list-item/div`);
                            await ell24[0].hover()
                          } catch (error) {
                            await page1.waitForTimeout(1000);
                            await page1.waitForXPath(`/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/li[${ints1[0]}]/intents-list-item/div`)
                            await page1.waitForTimeout(1000);
                            let ell24 = await page1.$x(`/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/li[${ints1[0]}]/intents-list-item/div`);
                            await ell24[0].hover()
                          }
                          
                          await page1.waitForTimeout(1000);
                          console.log('hovering over intent')
                          await page1.waitForTimeout(1000);
                  
                          async function selectIntents(){
                            for (const e5 of ints1) {
                              //select intents
                              //scroll into view
                             await page1.waitForTimeout(1000);
                             tInt = false
                             if (e5 == '21'){
                               await page1.waitForTimeout(2000);
                                 try {
                                     let nxt = await page1.$x('/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/div[2]/div/a[1]', {timeout: 15000});
                                     await page1.waitForTimeout(1500);
                                     await nxt[0].click()
                                     } catch (error) {
                                     console.log(error)
                                     
                                     } 
                                     e5 = 1
                             }
                             if (parseInt(e5)> 21 && tInt === false) {
                                 tInt = true
                               await page1.waitForTimeout(1000);
                               try {
                                   let nxt = await page1.$x('/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/div[2]/div/a[1]', {timeout: 15000});
                                   await page1.waitForTimeout(1500);
                                   await nxt[0].click()
                                  } catch (error) {
                                   console.log(error)
                                   
                                  } 
                                  e5 = 1
                           }
                             if(parseInt(e5) > 21){
                               e5 = parseInt(e5) - 20
                             }
                              try {
                                await page1.waitForXPath(`/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/li[${e5}]/intents-list-item/div/div/md-checkbox`);
                                await page1.waitForTimeout(1000);
                                let ell23 = await page1.$x(`/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/li[${e5}]/intents-list-item/div/div/md-checkbox`);
                                await ell23[0].click();
                                console.log('clicking intent checkbox')
                                await page1.waitForTimeout(1000);
                              } catch (error) {
                                await page1.waitForXPath(`/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/li[${e5}]/intents-list-item/div/div/md-checkbox`);
                                await page1.waitForTimeout(1000);
                                let ell23 = await page1.$x(`/html/body/div[1]/div[2]/div/div/div/section/div/div[3]/div/div/div[2]/ul/li[${e5}]/intents-list-item/div/div/md-checkbox`);
                                await ell23[0].click();
                                console.log('clicking intent checkbox')
                                await page1.waitForTimeout(1000);
                              }
                            }
                          }
                  
                          await selectIntents()
                          .then(async()=>{
                            await page1.evaluate(() => { window.scroll(0,0); });
                          let cpy = await page1.waitForSelector('aria/COPY', {
                              timeout: 5000
                            });
                            await page1.waitForTimeout(1000);
                            console.log('selecting copy button')
                            await page1.click('aria/COPY')
                            await page1.waitForTimeout(5000);
                           
                              
                          }).then(async()=>{
                            try {
                              try {
                                console.log('selecting the check')
                              await page1.waitForTimeout(1000);
                              await page1.waitForXPath(`/html/body/div[1]/div[5]/md-dialog/batch-popup/md-dialog-content/div/md-input-container[1]/md-checkbox/div[1]`)
                              await page1.waitForTimeout(1000);
                              let ell241 = await page1.$x(`/html/body/div[1]/div[5]/md-dialog/batch-popup/md-dialog-content/div/md-input-container[1]/md-checkbox/div[1]`);
                              await ell241[0].click()
                              let [ell242] = await page1.$x(`/html/body/div[1]/div[5]/md-dialog/batch-popup/md-dialog-content/div/md-input-container[1]/md-checkbox/div[1]`);
                              let txt23 = await page1.evaluate(element => element.textContent, ell242);
                              console.log(txt23)
                              let r2 = 'E' + rowNum;
                              console.log(r2)
                              //await UpdateSheet(r2, txt23);
                              } catch (error) {
                                console.log(error)
                              }
                              await page1.waitForTimeout(1000);
                              await page1.waitForSelector('.ng-scope > .md-dialog-content > .md-block:nth-child(5) > .md-primary > .md-container', {
                                timeout: 5000
                              });
                              await page1.waitForTimeout(1000);
                              console.log('selecting overwrite intents')
                              await page1.click('.ng-scope > .md-dialog-content > .md-block:nth-child(5) > .md-primary > .md-container')
                              await page1.waitForTimeout(1000);
                             } catch (error) {
                              
                             }
                      
                              //select agent
                              try {
                                await page1.waitForSelector('aria/Destination agent', {
                                  timeout: 5000
                                })
                                console.log('selecting selct agent')
                                await page1.waitForTimeout(1000);
                                await page1.click('aria/Destination agent')
                              } catch (error) {
                                
                              }
                              
                              // 36
                              //select the agent
                              //first level loop
                              //parameters
                              // /html/body/div[3]/md-select-menu/md-content/md-option[1]
                              // /html/body/div[3]/md-select-menu/md-content/md-option[2]
                              try {
                                  
                                    console.log('selector found')
                                    
                                      await page1.waitForXPath(`/html/body/div[3]/md-select-menu/md-content/md-option[${el5}]`)
                                      let agntToUpdate = await page1.$x(`/html/body/div[3]/md-select-menu/md-content/md-option[${el5}]`)
                                      await page1.waitForTimeout(1000);
                                      await agntToUpdate[0].click()
                                      //copy intents
                                      await page1.waitForSelector('aria/START', {
                                          timeout: 5000
                                        })
                                        console.log('selecting START')
                                        await page1.waitForTimeout(2000);
                                        await page1.click('aria/START')
                                        await page1.waitForTimeout(2000);
                                  await page1.waitForSelector('aria/DONE', {
                                    timeout: 5000
                                  })
                                  await page1.waitForTimeout(2000);
                                  await page1.click('aria/DONE')
                                    
                                } catch (error) {
                                  console.log('selector not found')
                                  
                                      console.log(`agent ${el5} not found: skipping`)
                                      //await UpdateSheet("I4", `agent ${el5} not found: skipping`);
                                      await page1.waitForXPath('/html/body/div[1]/div[5]/md-dialog/batch-popup/md-toolbar/div/h2');
                                      await page1.waitForTimeout(1000);
                                      let vgh = await page1.$x('/html/body/div[1]/div[5]/md-dialog/batch-popup/md-toolbar/div/h2');
                                      await vgh[0].click()
                                      await page1.waitForTimeout(1000);
                                      await page1.waitForXPath('/html/body/div[1]/div[5]/md-dialog/batch-popup/md-dialog-actions/button[1]');
                                      await page1.waitForTimeout(1000);
                                      let vgh2 = await page1.$x('/html/body/div[1]/div[5]/md-dialog/batch-popup/md-dialog-actions/button[1]');
                                      await vgh2[0].click()
                                      await page1.waitForTimeout(3000);
                                }
                          }).catch((err)=>{console.log(err)});
                          
                  
                         
                            
                         
                          
                        }
                  
                      })()
                      let r3 = 'D' + rowNum;
                      console.log(r3)
                      //await UpdateSheet(r3, 'Intents Update Done');
                      //await UpdateSheet('I4', 'Update Complete');
                      //await UpdateSheet('K4', 'Update Complete');
                      await page1.waitForTimeout(5000);
                      await browser.close()
                    
              }
              
                
              } catch (error) {
                console.log(error)
                console.log('INTENTS Error')
                //await UpdateSheet('I4', 'Update Error')
                setTimeout(async() => {
                  await browser.close()
                }, 7000);
              }
          }    
          await Intents()
}
run()