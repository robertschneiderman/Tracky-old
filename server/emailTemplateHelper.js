var images = {
  laptop: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103560/tracky/laptop.png",
  theater: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103561/tracky/theater.png",
  camera: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103560/tracky/camera.png",
  cellphone: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103560/tracky/cellphone.png",
  iron: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103560/tracky/iron.png",
  meditation: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103561/tracky/meditation.png",
  music: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103561/music.png",
  pan: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493101556/pan.png",
  refresh: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103561/tracky/refresh.png",
  shoe: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103561/tracky/shoe.png",
  suitcase: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493101553/tracky/suitcase.png",
  weight: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103561/tracky/weight.png",
  yoga: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103561/tracky/yoga.png",
  book: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103560/tracky/book.png",
  briefcase: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493103560/tracky/briefcase.png",
};

exports.headerOpening = function() {
  return `
    <!-- Inliner Build Version 4380b7741bb759d6cb997545f3add21ad48f010b -->
    <!DOCTYPE html>
    <html lang="en" style="min-height: 100%; font-family: sans-serif; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; position: relative; box-sizing: border-box; font-size: 12px; background: #f1f1f1; margin: 0;">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description">
    <meta name="author">
    <!--<link rel="stylesheet" href="../foundation-emails.css">--><!--<link rel="stylesheet" href="../compiledCss/all.css">--><title>Tracky Email</title>
    </head>
    <body style="width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; background: #f1f1f1; margin: 0; padding: 0;" bgcolor="#f1f1f1">
    <style type="text/css">
    @font-face {
    font-family: 'Lato'; font-style: normal; font-weight: 300; src: local('Lato Light'), local('Lato-Light'), url('https://fonts.gstatic.com/s/lato/v13/nj47mAZe0mYUIySgfn0wpQ.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Lato'; font-style: normal; font-weight: 400; src: local('Lato Regular'), local('Lato-Regular'), url('https://fonts.gstatic.com/s/lato/v13/v0SdcGFAl2aezM9Vq_aFTQ.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Lato'; font-style: normal; font-weight: 700; src: local('Lato Bold'), local('Lato-Bold'), url('https://fonts.gstatic.com/s/lato/v13/DvlFBScY1r-FMtZSYIYoYw.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Lato'; font-style: italic; font-weight: 400; src: local('Lato Italic'), local('Lato-Italic'), url('https://fonts.gstatic.com/s/lato/v13/LqowQDslGv4DmUBAfWa2Vw.ttf') format('truetype');
    }
    @media only screen and (max-width: 596px) {
      .small-float-center {
        margin: 0 auto !important; float: none !important; text-align: center !important;
      }
      .small-text-center {
        text-align: center !important;
      }
      .small-text-left {
        text-align: left !important;
      }
      .small-text-right {
        text-align: right !important;
      }
      .hide-for-large {
        display: block !important; width: auto !important; overflow: visible !important; max-height: none !important; font-size: inherit !important; line-height: inherit !important;
      }
      table.body table.container .hide-for-large {
        display: table !important; width: 100% !important;
      }
      table.body table.container .row.hide-for-large {
        display: table !important; width: 100% !important;
      }
      table.body table.container .callout-inner.hide-for-large {
        display: table-cell !important; width: 100% !important;
      }
      table.body table.container .show-for-large {
        display: none !important; width: 0; mso-hide: all; overflow: hidden;
      }
      table.body img {
        width: auto; height: auto;
      }
      table.body center {
        min-width: 0 !important;
      }
      table.body .container {
        width: 95% !important;
      }
      table.body .columns {
        height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 16px !important; padding-right: 16px !important;
      }
      table.body .column {
        height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 16px !important; padding-right: 16px !important;
      }
      table.body .columns .column {
        padding-left: 0 !important; padding-right: 0 !important;
      }
      table.body .columns .columns {
        padding-left: 0 !important; padding-right: 0 !important;
      }
      table.body .column .column {
        padding-left: 0 !important; padding-right: 0 !important;
      }
      table.body .column .columns {
        padding-left: 0 !important; padding-right: 0 !important;
      }
      table.body .collapse .columns {
        padding-left: 0 !important; padding-right: 0 !important;
      }
      table.body .collapse .column {
        padding-left: 0 !important; padding-right: 0 !important;
      }
      td.small-1 {
        display: inline-block !important; width: 8.33333% !important;
      }
      th.small-1 {
        display: inline-block !important; width: 8.33333% !important;
      }
      td.small-2 {
        display: inline-block !important; width: 16.66667% !important;
      }
      th.small-2 {
        display: inline-block !important; width: 16.66667% !important;
      }
      td.small-3 {
        display: inline-block !important; width: 25% !important;
      }
      th.small-3 {
        display: inline-block !important; width: 25% !important;
      }
      td.small-4 {
        display: inline-block !important; width: 33.33333% !important;
      }
      th.small-4 {
        display: inline-block !important; width: 33.33333% !important;
      }
      td.small-5 {
        display: inline-block !important; width: 41.66667% !important;
      }
      th.small-5 {
        display: inline-block !important; width: 41.66667% !important;
      }
      td.small-6 {
        display: inline-block !important; width: 50% !important;
      }
      th.small-6 {
        display: inline-block !important; width: 50% !important;
      }
      td.small-7 {
        display: inline-block !important; width: 58.33333% !important;
      }
      th.small-7 {
        display: inline-block !important; width: 58.33333% !important;
      }
      td.small-8 {
        display: inline-block !important; width: 66.66667% !important;
      }
      th.small-8 {
        display: inline-block !important; width: 66.66667% !important;
      }
      td.small-9 {
        display: inline-block !important; width: 75% !important;
      }
      th.small-9 {
        display: inline-block !important; width: 75% !important;
      }
      td.small-10 {
        display: inline-block !important; width: 83.33333% !important;
      }
      th.small-10 {
        display: inline-block !important; width: 83.33333% !important;
      }
      td.small-11 {
        display: inline-block !important; width: 91.66667% !important;
      }
      th.small-11 {
        display: inline-block !important; width: 91.66667% !important;
      }
      td.small-12 {
        display: inline-block !important; width: 100% !important;
      }
      th.small-12 {
        display: inline-block !important; width: 100% !important;
      }
      .columns td.small-12 {
        display: block !important; width: 100% !important;
      }
      .column td.small-12 {
        display: block !important; width: 100% !important;
      }
      .columns th.small-12 {
        display: block !important; width: 100% !important;
      }
      .column th.small-12 {
        display: block !important; width: 100% !important;
      }
      table.body td.small-offset-1 {
        margin-left: 8.33333% !important;
      }
      table.body th.small-offset-1 {
        margin-left: 8.33333% !important;
      }
      table.body td.small-offset-2 {
        margin-left: 16.66667% !important;
      }
      table.body th.small-offset-2 {
        margin-left: 16.66667% !important;
      }
      table.body td.small-offset-3 {
        margin-left: 25% !important;
      }
      table.body th.small-offset-3 {
        margin-left: 25% !important;
      }
      table.body td.small-offset-4 {
        margin-left: 33.33333% !important;
      }
      table.body th.small-offset-4 {
        margin-left: 33.33333% !important;
      }
      table.body td.small-offset-5 {
        margin-left: 41.66667% !important;
      }
      table.body th.small-offset-5 {
        margin-left: 41.66667% !important;
      }
      table.body td.small-offset-6 {
        margin-left: 50% !important;
      }
      table.body th.small-offset-6 {
        margin-left: 50% !important;
      }
      table.body td.small-offset-7 {
        margin-left: 58.33333% !important;
      }
      table.body th.small-offset-7 {
        margin-left: 58.33333% !important;
      }
      table.body td.small-offset-8 {
        margin-left: 66.66667% !important;
      }
      table.body th.small-offset-8 {
        margin-left: 66.66667% !important;
      }
      table.body td.small-offset-9 {
        margin-left: 75% !important;
      }
      table.body th.small-offset-9 {
        margin-left: 75% !important;
      }
      table.body td.small-offset-10 {
        margin-left: 83.33333% !important;
      }
      table.body th.small-offset-10 {
        margin-left: 83.33333% !important;
      }
      table.body td.small-offset-11 {
        margin-left: 91.66667% !important;
      }
      table.body th.small-offset-11 {
        margin-left: 91.66667% !important;
      }
      table.body table.columns td.expander {
        display: none !important;
      }
      table.body table.columns th.expander {
        display: none !important;
      }
      table.body .right-text-pad {
        padding-left: 10px !important;
      }
      table.body .text-pad-right {
        padding-left: 10px !important;
      }
      table.body .left-text-pad {
        padding-right: 10px !important;
      }
      table.body .text-pad-left {
        padding-right: 10px !important;
      }
      table.menu {
        width: 100% !important;
      }
      table.menu td {
        width: auto !important; display: inline-block !important;
      }
      table.menu th {
        width: auto !important; display: inline-block !important;
      }
      table.menu.vertical td {
        display: block !important;
      }
      table.menu.vertical th {
        display: block !important;
      }
      table.menu.small-vertical td {
        display: block !important;
      }
      table.menu.small-vertical th {
        display: block !important;
      }
      table.menu[align="center"] {
        width: auto !important;
      }
      table.button.small-expand {
        width: 100% !important;
      }
      table.button.small-expanded {
        width: 100% !important;
      }
      table.button.small-expand table {
        width: 100%;
      }
      table.button.small-expanded table {
        width: 100%;
      }
      table.button.small-expand table a {
        text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
      }
      table.button.small-expanded table a {
        text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
      }
      table.button.small-expand center {
        min-width: 0;
      }
      table.button.small-expanded center {
        min-width: 0;
      }
      }
      @media (min-width: 600px) {
        html {
          font-size: 13px;
        }
      }
      @media (min-width: 800px) {
        html {
          font-size: 14px;
        }
      }
      @media (min-width: 597px) {
        .w-whole-thing .wrapper-inner {
          padding: 1.8rem;
        }
        .w-intervals .wrapper-inner {
          padding: .4rem;
        }
      }
      </style>  
      <table align="center" class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; width: 90%; position: relative; box-sizing: border-box; background: #fefefe; margin: 0 auto; padding: 0;" bgcolor="#fefefe"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><td style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left" valign="top">
        <table class="wrapper w-whole-thing" align="center" style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><td class="wrapper-inner" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: .5rem;" align="left" valign="top">
          <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; box-sizing: border-box; padding: 0;"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
      <th class="small-12 large-12 columns first last" style="vertical-align: middle; width: 564px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 16px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
      <th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                <img src="http://res.cloudinary.com/stellar-pixels/image/upload/v1493109732/tracky/logo.png" class="img-logo" alt="" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: 9rem; max-width: 100%; clear: both; display: block; position: relative; box-sizing: border-box; margin-bottom: 1.1em; border: 0;">
      </th>
      <th class="expander" style="visibility: hidden; width: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left"></th>
      </tr></table></th>
            </tr></tbody></table>
      `;
};

exports.intervalOpening = function() {
  return `
    <table class="wrapper w-intervals" align="center" style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; position: relative; box-sizing: border-box; margin-bottom: 1.5rem; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><td class="wrapper-inner" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0rem 0.4rem;" align="left" valign="top">
            <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; box-sizing: border-box; padding: 0;"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
    <th class="small-12 large-12 columns first last" style="vertical-align: middle; width: 564px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 16px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
    <th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                <h2 class="title-email" style="color: inherit; font-family: 'Lato'; font-weight: 700; text-align: left; line-height: 1.3; word-wrap: normal; font-size: 1.4rem; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">Daily</h2>
              </th>
    <th class="expander" style="visibility: hidden; width: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left"></th>
    </tr></table></th>
            </tr></tbody></table>  
  `;
};

exports.task = function(task, count, target) {
  let completed = count >= target;
  let completedIcon = completed ? 'checkmark' : 'xmark';
  let icon = task['icon'];
  let path = images[icon];

  return `
    <table class="wrapper w-tasks" align="center" style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; position: relative; box-sizing: border-box; border-bottom-width: 1px; border-bottom-color: #eee; border-bottom-style: solid; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><td class="wrapper-inner" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0 0.4rem;" align="left" valign="top">
              <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; box-sizing: border-box; padding: 0;"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
    <th class="small-6 large-6 columns first" style="vertical-align: middle; width: 274px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 8px 9px 16px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                  <img class="img-icon" src="${path}" alt="a laptop" title="a laptop" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: 2.2rem; max-width: 100%; clear: both; display: inline-block; position: relative; box-sizing: border-box; height: 2.2rem; margin-right: 1rem; vertical-align: middle; border: 0;"><h3 class="title-task" style="color: inherit; font-family: 'Lato'; font-weight: 400; text-align: left; line-height: 1.3; word-wrap: normal; font-size: 1.2rem; position: relative; box-sizing: border-box; display: inline-block; vertical-align: middle; margin: 0; padding: 0;" align="left">${task.name}</h3>
                </th></tr></table></th>
                <th class="small-6 large-6 columns last" style="vertical-align: middle; width: 274px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 16px 9px 8px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                  <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; box-sizing: border-box; padding: 0;"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
    <th class="small-8 large-8 columns first" style="vertical-align: middle; width: 370.66667px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 0;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                      <p class="text-count text-right" style="text-align: right; color: #0a0a0a; font-family: 'Lato'; font-weight: normal; line-height: 2.6; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="right">${count} / ${target}</p>
                    </th></tr></table></th>
                    <th class="small-2 large-2 columns last" style="vertical-align: middle; width: 80.66667px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 0;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                      <img src="../images/${completedIcon}.svg" alt="" class="img-completion float-right" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: 1rem; max-width: 100%; clear: both; display: inline-block; float: right; text-align: right; position: relative; box-sizing: border-box; height: 1rem; fill: #00ffdc; border: 0;" align="right">
    </th></tr></table></th>
                  </tr></tbody></table>
    </th></tr></table></th>      
              </tr></tbody></table>  
  `;
};

exports.intervalClosing = function() {
  return `  
    </td></tr></table>
    </td></tr></table>
  `;
};

exports.headerClosing = function() {
  return `
    </td></tr></table>
    </td></tr></tbody></table>
    </body>
    </html>
  `;
};