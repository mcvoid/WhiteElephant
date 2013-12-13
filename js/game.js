var makeTable = function () {
    var rowify = function(u) {
        return "  <tr><td>" + u.name + "</td><td>" + u.poss + "</td></tr>";
    };
    var tablify = function(v) {
        return "<table><tbody>\n"+ v.map(rowify).join("\n") + "\n</tbody></table>";
    };
    return tablify;
}();