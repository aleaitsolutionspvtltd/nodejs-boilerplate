//Important note

//You can add functions here which are very huge in file size 😊
class Helper{
    static BsonToJsonConverter = (data) => {
        data = JSON.stringify(data);
        data = JSON.parse(data);
        return data;
      };
}
export default Helper;