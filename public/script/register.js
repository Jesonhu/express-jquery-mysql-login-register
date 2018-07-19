;(function($) {
  const fastclick = {
    init() {
      if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function () {
          FastClick.attach(document.body)
        })
      }
    }
  }
  fastclick.init();

  $(function() {
    const p_register = {
      nameValue: '',
      emailValue: '',
      passwordValue: '',
      onListenSubmit() {
        const _this = this;
        $('#regiser-btn').on('click', function() {
          $.ajax({
            url: '/api/register',
            type: 'POST',
            data: {
              username: $('#name-input').val(),
              email: $('#email-input').val(),
              password: $('#password-input').val()
            },
            success: function(data) {
              if (data.code === 1) {
                // 成功
                _this.show_loginGuide();
              } else {
                // 出问题了
              }
              _this.show_msg(data.msg);
            },
            error: function() {
              _this.show_msg('请求失败，请稍后重试');
            }
          });
        });
        return this;
      },
      show_msg(msg) {
        layer.open({
          skin: 'msg'
          ,content: msg
          ,time: 2.5
          ,style: 'position:fixed; top:10px; left:50%; margin-left:-150px; width: 300px;height:30px; padding-bottom:10px; border:none;'
        });
      },
      show_loginGuide() {
        $('#login-guide').css('display', 'block');
      },
      hide_loginGuide() {
        $('#login-guide').css('display', 'none');
      }
    }
    p_register.onListenSubmit().hide_loginGuide();
  });
})(jQuery);