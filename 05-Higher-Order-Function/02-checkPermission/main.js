const yes = () => alert("ACCESS GRANTED");
const no = () => alert("ACCESS DENIED");
function checkPermission (role,yes,no) {
    if (role.toUpperCase() == "ADMIN") yes();
    else no();
};