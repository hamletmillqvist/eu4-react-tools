export class UrlUtil {
    public static getPathParts() {
        return document.URL.split('/').splice(3);
    }
    
    public static getPath() {
        return "/" + this.getPathParts().join("/");
    }
}