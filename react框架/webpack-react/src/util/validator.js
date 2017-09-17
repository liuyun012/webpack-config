/**
 * USER
 * Created by samli on 07/09/2017.
 */
//校验账号类型和正确性 1 邮箱 2 手机 0 格式错误
module.exports.testIDType = function(id) {
	var phoneReg = /^1(3|5|7|8)+\d{9}$/;
	var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if (emailReg.test(id)) {
		return 1;
	} else if (phoneReg.test(id)) {
		return 2;
	} else {
		return 0;
	}
}

//
module.exports.testPone = function(tel) {
	var phoneReg = /^1(3|5|7|8)+\d{9}$/;
	return phoneReg.test(tel);
}

