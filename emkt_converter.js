window.onload = function(){

    // add meta tags
    document.querySelector('head').innerHTML += `<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <!--[if !mso><!--> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <!--<![endif--> <meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;" name="viewport"> <meta name="viewport" content="width=device-width"> <meta name="x-apple-disable-message-reformatting"> <meta name="format-detection" content="telephone=no"> <meta name="color-scheme" content="light dark">`
    // add styles and responsivity
    document.querySelector('head').innerHTML += `<style type="text/css"> /* ========================================================================== RESET STYLES ========================================================================== */ img{max-width:100%;} table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }/*remove spacing in the table: outlook 2007 2010 2013*/ body { text-align: left; font-family: Arial, sans-serif; font-size: 15px; line-height: 1.4; margin: 0; padding: 0; width: 100% !important; } * { border:0; font-family: Arial, sans-serif; } img, a img { border: none; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } /* Force IE to smoothly render resized images. */ p { margin: 16px 0; } body, table, td, p, a, li, blockquote { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; } /* Prevent Windows- and Webkit-based mobile platforms from changing declared text sizes. */ table{width:600px; min-width: 600px; margin:0 auto; border-spacing:0px; border-collapse: collapse; padding:0px;} #outlook a { padding: 0; } /* Force Outlook 2007 and up to provide a "view in browser" message. */ a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } a[x-apple-data-detectors=true] { color: inherit !important; text-decoration: inherit !important; } /* Prevent iPhone mobile platforms from underlineing in blue dates and time */ u { text-decoration: none; } /* Fix for when IE gmail places <u> tag around entire email when images are blocked */ sup { font-size:67%; line-height:63%; vertical-align:49%; white-space:nowrap; } .hero{width:100%;} @media (prefers-color-scheme: dark) { .dark-apple-fix{color: #ffffff !important;} .dark-footer-bg-fix{ background-color: #291B44 !important; } .darkmode{ background-color: #cccccc !important; } } </style> <style type="text/css"> tbody{background:#ffffff; color:#000000;} .dark-footer-bg-fix tbody{ background-color: #707070 !important; color:#ffffff; } /* ========================================================================== BREAKPOINT 480PX ========================================================================== */ @media only screen and (max-width:480px){ img{max-width:100%;} .table80 { width: 80% !important; float: none !important; min-width: 80% !important; } .table90 { width: 90% !important; float: none !important; min-width: 90% !important; } .table100 { width: 100% !important; float: none !important; min-width: 100% !important; } .col-70{ width: 78% !important; } .col-40{ width: 22% !important; } .max100 img { max-width: 100% !important; height: auto !important; } .max90 img { max-width: 90% !important; height: auto !important; } .center { text-align: center !important; } .pad-lr-0 { padding-left: 0px !important; padding-right: 0px !important; } .pad-lr-20 { padding-left: 20px !important; padding-right: 20px !important; } .pad-lr-15 { padding-left: 15px !important; padding-right: 15px !important; } .pad-lr-8 { padding-left: 5px !important; padding-right: 5px !important; } .pad-lr-40 { padding-left: 23px !important; padding-right: 23px !important; } .pad-lr-links { padding-left: 23px !important; padding-right: 23px !important; } .pad-b-15 { padding-bottom: 15px !important; } .pad-r-10{padding-right: 10px !important;} .pad-b-20 { padding-bottom: 20px !important; } .pad-b-30 { padding-bottom: 30px !important; } .pad-t-20 { padding-top: 20px !important; } .pad-t-25 { padding-top: 25px !important; } .fs-16{ font-size: 17px !important; } .hide { text-indent: -99999em; display: none !important; } .mobshow { display: block !important; width: auto !important; height: auto !important; overflow: visible !important; float: none !important; visibility: visible !important; border: none !important; mso-hide: all !important; } .d-block { display: block !important; } .fs-small{ font-size: 12px !important; } .fs-11{ font-size: 12px !important} .pad-header-mobile{ padding-right: 8px !important; padding-left: 8px !important; } } @media only screen and (max-width:360px){ .pad-header-mobile{ padding-right: 5px !important; padding-left: 5px !important; } .pad-lr-40 { padding-left: 8px !important; padding-right: 8px !important; } .pad-lr-links { padding-left: 0px !important; padding-right: 0px !important; } .fs-12{ font-size: 12px !important} .fs-11{ font-size: 11px !important} .fs-16{ font-size: 16px !important; } .fs-small{ font-size: 11px !important; } } </style> <!--[if (gte mso 9)|(IE)]> <style type="text/css"> body { margin: 0 !important; padding: 0 !important; font-family: Arial, sans-serif !important; } table, td, div, p { font-family: Arial, sans-serif !important; line-height: normal; } sup {font-size:10px !important;} </style> <![endif]--> <!--[if gte mso 12]> <style type="text/css"> sup { font-size:12px !important; vertical-align:0px !important; } </style> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]-->`
    document.querySelector('html').innerHTML += `<!--[if !mso]><!- --> <div style="font-size:0; max-height:0; overflow:hidden; display:none; mso-hide:all;"> <span style="display:none;"><a href="%%profile_center_url%%" alias="Update Profile">Update Profile</a></span> %%[ if 0 == 1 then ]%% %%profile_center_url%% %%[endif]%% %%[ if 0 == 1 then ]%% %%profile_center_url%% %%Member_Busname%%<br>%%Member_Addr%% %%Member_City%%, %%Member_State%%, %%Member_PostalCode%%, %%Member_Country%% %%[endif]%% </div> <!--<![endif]-->` 
    let body = document.body.outerHTML
    
    let bodyReplace = body
                    .replaceAll('<table', '<table align="center" cellpadding="0" class="table100 darkmode" role="presentation"')
                    .replaceAll('<separator', '<table align="center" cellpadding="0" class="table100 darkmode" role="presentation"><tr><td').replaceAll('</separator>', '</table>')
                    .replaceAll('<hero', '<table align="center" cellpadding="0" width="100%" class="hero table100 darkmode" role="presentation"><tr><td').replaceAll('</hero>', '</table>')
                    .replaceAll('<td', '<td class="fs-small text-1"')
                    .replaceAll('<img', '<img style="display:inline-block; text-decoration: none; -ms-interpolation-mode: bicubic; color: #000000; font-family: Arial, sans-serif;font-size: 11px; line-height:1;"')
                    .replace('<body', '<body style="margin:0px; padding:0px;" class="darkmode"')
                    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    document.body.outerHTML = '<center>'+bodyReplace+'</center>'

    let tds = document.querySelectorAll('td')

    // Modifica class/style da table
    let tableStyles = new Array()
    let tableClasses = new Array()

    tds.forEach(td =>{
        if(td.hasAttribute('table-style')){
            tableStyles.push(td)
        }
        if(td.hasAttribute('table-class')){
            tableClasses.push(td)
        }
    })

    tableStyles.forEach(tableStyle =>{
        let newstyle = tableStyle.getAttribute('table-style')
        tableStyle.offsetParent.style = newstyle
        tableStyle.removeAttribute('table-style')
    })

    tableClasses.forEach(tableClass =>{
        let classe = tableClass.getAttribute('table-class')
        tableClass.offsetParent.classList.add(classe)
        tableClass.removeAttribute('table-class')
    })

     // Modifica class/style da tr
     let trStyles = new Array()
     let trClasses = new Array()

     tds.forEach(td =>{
         if(td.hasAttribute('tr-style')){
            trStyles.push(td)
         }
         if(td.hasAttribute('tr-class')){
            trClasses.push(td)
        }
     })
 
     trStyles.forEach(trStyle =>{
         let newstyle = trStyle.getAttribute('tr-style')
         trStyle.parentElement.style = newstyle
         trStyle.removeAttribute('tr-style')
     })

     trClasses.forEach(trClass =>{
        let classe = trClass.getAttribute('tr-class')
        trClass.offsetParent.classList.add(classe)
        trClass.removeAttribute('tr-class')
    })

    // Modifica class/style da td
    let tdClasses = new Array()
    let tdStyles = new Array()

    tds.forEach(td =>{
        if(td.hasAttribute('td-class')){
            tdClasses.push(td)
        }
        if(td.hasAttribute('td-style')){
            tdStyles.push(td)
        }
    })

    console.log(tdStyles)

    tdStyles.forEach(tdStyle =>{
        let newstyle = tdStyle.getAttribute('td-style')
        tdStyle.style = newstyle
        tdStyle.removeAttribute('td-style')
    })

    tdClasses.forEach(tdClass =>{
        let classe = tdClass.getAttribute('td-class')
        tdClass.classList.add(classe)
        tdClass.removeAttribute('td-class')
    })
    
    // propriedade images
    let imgs = document.querySelectorAll('img')

    imgs.forEach(img =>{
        img.setAttribute("border", "0")
    })

    let html = document.querySelector('html')

}