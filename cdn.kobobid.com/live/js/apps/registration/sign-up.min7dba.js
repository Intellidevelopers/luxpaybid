$(function(){function e(){"undefined"!=typeof grecaptcha&&grecaptcha.ready(function(){grecaptcha.execute($("#recaptcha_site_key").val(),{action:"submit"}).then(function(e){$("#recaptcha_site_token").val(e)})})}$(".show_hide_password img").on("click",showHidePassword),$(".page-fields").on("focus",function(){clearFocusErrors($("#user-sign-up-button"))}),$("[name='email']").on("keyup blur",function(){validateInlineEmail($(this),$("#user-sign-up-button")),oneSecondDebounce()}),$("[name='number']").on("keyup blur",function(){validateInlineNumber($(this),$("#user-sign-up-button")),oneSecondDebounce()}),$("[name='username']").on("keyup blur",function(){validateInlineUsername($(this),$("#user-sign-up-button")),oneSecondDebounce()}),$("[name='first_name']").on("keyup blur",function(){validateInlineFirstName($(this),$("#user-sign-up-button")),oneSecondDebounce()}),$("[name='last_name']").on("keyup blur",function(){validateInlineLastName($(this),$("#user-sign-up-button")),oneSecondDebounce()}),$("[name='password']").on("keyup blur",function(){validateInlinePassword($(this),$("#user-sign-up-button")),oneSecondDebounce()}),window.onmessage=function(e){if($("#facebook_login").val(""),$("#google_login").val(""),"facebook"===e.data.provider&&"social_window_close_successful"===e.data.type){var n=disableOldButton($("#user-sign-up-button"),$("#user-sign-up-button"),!1);clearInlineErrors(),$.ajax({type:"POST",url:"/social_auth/signup_verify",dataType:"JSON",data:{provider:"facebook"},success:function(e){_.has(e,"data")&&_.has(e.data,"email")?($("[name='email']").val(e.data.email),validateInlineEmail($("[name='email']"),$("#user-sign-up-button"))):window.location.href="/",$("#facebook_login").val("1"),$(".signup-social-buttons").hide(),$("[name='password']").prop("required",!1).removeAttr("required"),$("#password-form-div").hide(),$("#user-sign-up-form").find('input[name="email"]').prop("readonly",!0),$("#user-sign-up-button").html('<img src="https://cdn.kobobid.com/live/icon/facebook-login.png" width="16px"  alt="Facebook Sign Up" /> Sign up'),enableOldButton(n,$("#user-sign-up-button"),$("#user-sign-up-form"))},error:function(e){$(".signup-social-buttons").show(),$(".password-form-div").show(),$("[name='password']").prop("required",!0),e.hasOwnProperty("responseJSON")&&e.responseJSON.hasOwnProperty("errors")?formatInlineErrorMessages(e.responseJSON.errors):window.location.href="/",enableOldButton(n,$("#user-sign-up-button"),$("#user-sign-up-form"))}})}else"facebook"===e.data.provider&&"social_window_close_failed"===e.data.type&&clearInlineErrors()},$("#sign-in-with-facebook").on("click",function(e){e.preventDefault(),window.open("/social_auth/facebook","social_window_callback","width=400,height=600")}),$("#has_campaign_code").off("click").on("click",function(e){$("#has_campaign_code").is(":checked")?($(".has_campaign_code").show(),$("#campaign").prop("required",!0)):($(".has_campaign_code").hide(),$("#campaign").val(""),$("#campaign").removeAttr("required"))}),$("#has_referral_code").off("click").on("click",function(e){$("#has_referral_code").is(":checked")?($(".has_referral_code").show(),$("#referral").prop("required",!0)):($(".has_referral_code").hide(),$("#referral").val(""),$("#referral").removeAttr("required"))}),$("#user-sign-up-form").off("submit").on("submit",function(n){n.preventDefault();var a=$(this),o=disableOldButton($("#user-sign-up-button"),a);clearInlineErrors();var r={first_name:$("[name='first_name']").val(),last_name:$("[name='last_name']").val(),email:$("[name='email']").val(),username:$("[name='username']").val(),number:$("[name='number']").val(),password:$("[name='password']").val(),referral:$("[name='referral']").val(),campaign:$("[name='campaign']").val(),eighteen_or_over:$("[name='eighteen_or_over']").is(":checked")?$("[name='eighteen_or_over']").val():"",newsletter_opt_in:$("[name='newsletter_opt_in']").is(":checked")?$("[name='newsletter_opt_in']").val():"No",facebook_login:$("[name='facebook_login']").val(),google_login:$("[name='google_login']").val(),is_async:!0};$("[name='recaptcha_site_token']")[0]&&(r.token=$("[name='recaptcha_site_token']").val(),r.honeypot_check=$("[name='why_join_kobobid_from_here']").val()),$.ajax({type:"POST",url:"/signup",dataType:"JSON",data:r,success:function(){try{if($("#signup_live")[0]&&"Yes"===$("#signup_live").val()){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-182880484-1"),e("event","page_view",{page_title:"Welcome",page_path:"/welcome",send_to:"UA-182880484-1"}),e("event","conversion",{send_to:"AW-404299575/xMwACPK8i_sBELe-5MAB",email:r.email,phone_number:r.number,first_name:r.first_name,last_name:r.last_name,country:"Nigeria",postal_code:"12345"})}}catch(e){}setTimeout(function(){$(".agent-signup-form-check")[0]?window.location.href="/login":window.location.href="/verify"},1e3)},error:function(n){n.hasOwnProperty("responseJSON")&&n.responseJSON.hasOwnProperty("errors")?formatInlineErrorMessages(n.responseJSON.errors):window.location.href="/",$("[name='recaptcha_site_token']")[0]&&e(),enableOldButton(o,$("#user-sign-up-button"),a)}})})});