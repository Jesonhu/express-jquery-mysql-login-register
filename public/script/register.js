;(function($) {
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
              alert(data.msg);
            },
            error: function() {
              alert('注册失败');
            }
          });
        });
        return this;
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