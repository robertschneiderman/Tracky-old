const _ = require('lodash');

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

var PATHS = {
  checkmark: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493260451/tracky/checkmark.png",
  xmark: "http://res.cloudinary.com/stellar-pixels/image/upload/v1493260451/tracky/xmark.png"
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
  <!--<link rel="stylesheet" href="../foundation-emails.css">--><title>Tracky Email</title>
  </head>
  <body style="width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; background: #f1f1f1; margin: 0; padding: 0;" bgcolor="#f1f1f1">

  <table align="center" class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; width: 90%; position: relative; box-sizing: border-box; background: #fefefe; margin: 0 auto; padding: 0;" bgcolor="#fefefe"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><td style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left" valign="top">
      <table class="row r-logo" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; box-sizing: border-box; background: #f1f1f1; padding: 0;" bgcolor="#f1f1f1"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
<th class="small-4 large-4 columns first" style="vertical-align: middle; width: 177.33333px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 8px 9px 16px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left"></th></tr></table></th>
        <th class="small-4 large-4 columns" style="vertical-align: middle; width: 177.33333px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 8px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
          <img src="http://res.cloudinary.com/stellar-pixels/image/upload/v1493109732/tracky/logo.png" class="img-logo" alt="" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: 9rem; max-width: 100%; clear: both; display: block; position: relative; box-sizing: border-box; margin: 1rem auto; border: 0;">
</th></tr></table></th>
        <th class="small-4 large-4 columns last" style="vertical-align: middle; width: 177.33333px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 16px 9px 8px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left"></th></tr></table></th>        
      </tr></tbody></table>
      `;
};

exports.intervalOpening = function(interval) {
  return `
    <table class="wrapper w-intervals" align="center" style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; position: relative; box-sizing: border-box; margin-bottom: 1.5rem; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><td class="wrapper-inner" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0rem 0.4rem;" align="left" valign="top">
            <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; box-sizing: border-box; padding: 0;"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
    <th class="small-12 large-12 columns first last" style="vertical-align: middle; width: 564px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 16px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
    <th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                <h2 class="title-email" style="color: inherit; font-family: 'Lato'; font-weight: 700; text-align: left; line-height: 1.3; word-wrap: normal; font-size: 1.4rem; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">${_.startCase(_.toLower(interval))}</h2>
              </th>
    <th class="expander" style="visibility: hidden; width: 0; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left"></th>
    </tr></table></th>
            </tr></tbody></table>  
  `;
};

exports.task = function(task, count, target, completed) {
  // let completed = count >= target;
  let completedIcon = completed ? PATHS['checkmark'] : PATHS['xmark'];
  let icon = task['icon'];
  let path = images[icon];

  return `
    <table class="wrapper w-tasks" align="center" style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; position: relative; box-sizing: border-box; border-bottom-width: 1px; border-bottom-color: #eee; border-bottom-style: solid; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><td class="wrapper-inner" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0 0.4rem;" align="left" valign="top">
              <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; box-sizing: border-box; padding: 0;"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
    <th class="small-6 large-6 columns first" style="vertical-align: middle; width: 274px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 8px 9px 16px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                  <img class="img-icon" alt="a laptop" title="a laptop" src="${path}" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: 2.2rem; max-width: 100%; clear: both; display: inline-block; position: relative; box-sizing: border-box; height: 2.2rem; margin-right: 1rem; vertical-align: middle; border: 0;" /><h3 class="title-task" style="color: inherit; font-family: 'Lato'; font-weight: 400; text-align: left; line-height: 1.3; word-wrap: normal; font-size: 1.2rem; position: relative; box-sizing: border-box; display: inline-block; vertical-align: middle; margin: 0; padding: 0;" align="left">${task.name}</h3>
                </th></tr></table></th>
                <th class="small-6 large-6 columns last" style="vertical-align: middle; width: 274px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 16px 9px 8px;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                  <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: table; box-sizing: border-box; padding: 0;"><tbody style="position: relative; box-sizing: border-box;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left">
    <th class="small-8 large-8 columns first" style="vertical-align: middle; width: 370.66667px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 0;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                      <p class="text-count text-right" style="text-align: right; color: #0a0a0a; font-family: 'Lato'; font-weight: normal; line-height: 2.6; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="right">${count} / ${target}</p>
                    </th></tr></table></th>
                    <th class="small-2 large-2 columns last" style="vertical-align: middle; width: 80.66667px; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0 auto; padding: 9px 0;" align="left" valign="middle"><table style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; box-sizing: border-box; padding: 0;"><tr style="vertical-align: top; text-align: left; position: relative; box-sizing: border-box; padding: 0;" align="left"><th style="color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-weight: normal; text-align: left; line-height: 1.3; font-size: 16px; position: relative; box-sizing: border-box; margin: 0; padding: 0;" align="left">
                      <img src="${completedIcon}" alt="" class="img-completion float-right" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: 1rem; max-width: 100%; clear: both; display: inline-block; float: right; text-align: right; position: relative; box-sizing: border-box; height: 1rem; fill: #00ffdc; border: 0;" align="right">
    </th></tr></table></th>
                  </tr></tbody></table>
    </th></tr></table></th>      
              </tr></tbody></table>  
        </td></tr></table>
  `;
};

exports.intervalClosing = function() {
  return `  
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