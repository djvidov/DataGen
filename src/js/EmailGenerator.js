var mailProviders = [
    "@gmail.com",
    "@yahoo.com",
    "@outlook.com",
    "@live.com",
    "@office.com"
];

function EmailGenerator () {

    this.chooseLength = function() {
    var strLength = Math.random().toString().substr(2, 1);
    var length = parseInt(strLength);
    if (length <= 4){
        length = 6;
    }
    return length;
    };

    this.generateEmail = function(length) {
        var character = "0123456789abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var result = "";
        for (var i = length; i > 0; i --){
            result += character[Math.floor(Math.random() * character.length)];
        }
        result += mailProviders[Math.floor(Math.random() * mailProviders.length)];
        return result;
    };

    this.generate = function() {
        var chooseLength = this.chooseLength();
        var generateEmail = this.generateEmail(chooseLength);
        return generateEmail;
    };

}