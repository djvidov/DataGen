
function EmailGenerator () {

    this.chooseLength = function() {
    var strlength = Math.random().toString().substr(2, 1);
    var length = parseInt(strlength);
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
        if (result.length === 6) {
            result += "@gmail.com";
        }
        else if(result.length === 7){
            result += "@yahoo.com";
        }
        else if(result.length === 9){
            result += "@outlook.com";
        }
        else{
            result += "@office.com";
        }
        return result;
    };

    this.generate = function() {
        var chooseLength = this.chooseLength();
        var generateEmail = this.generateEmail(chooseLength);
        return generateEmail;
    };

}