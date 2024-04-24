class DemoController{
    static getCurrentTime=async()=>{
        const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Get hours with leading zero if needed
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes with leading zero if needed
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds with leading zero if needed
    return `${hours}:${minutes}:${seconds}`;
    }
}
export default DemoController;