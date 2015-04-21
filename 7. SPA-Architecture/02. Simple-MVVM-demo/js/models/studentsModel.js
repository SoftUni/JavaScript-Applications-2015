var app = app || {};

app.studentDataModel = (function() {
    function StudentDataModel(baseUrl, requester, headers) {
        this._requester = requester;
        this._headers = headers;
        this._serviceUrl = baseUrl + 'classes/Student';
    }

    StudentDataModel.prototype.getStudents = function () {
        var headers = this._headers.getHeaders();

        return this._requester.get(this._serviceUrl, headers);
    };

    StudentDataModel.prototype.addStudent = function (student) {
        var headers = this._headers.getHeaders();

        return this._requester.post(this._serviceUrl, headers, student);
    };

    return {
        load: function(baseUrl, requester, headers) {
            return new StudentDataModel(baseUrl, requester, headers);
        }
    }
}());