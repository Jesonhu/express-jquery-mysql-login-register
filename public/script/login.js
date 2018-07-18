;(function($) {
  $(function() {
    const p_login = {
      nameValue: '',
      emailValue: '',
      passwordValue: '',
      onListenSubmit() {
        $('#login-btn').on('click', function() {
          $.ajax({
            url: '/api/login',
            type: 'POST',
            data: {
              username: $('#name-input').val(),
              password: $('#password-input').val()
            },
            success: function(data) {
              if (data.code === 1) {
                // 成功
                setTimeout(() => {
                  window.location.href = './index.html';
                }, 3000);
              } else {
                // 出问题了
              }
              alert(data.msg);
            },
            error: function() {
              alert('登录失败');
            }
          });
        });
        return this;
      }
    }
    p_login.onListenSubmit();
  });
})(jQuery);