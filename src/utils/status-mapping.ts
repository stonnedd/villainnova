export class StatusMapping {

    getData(status: number) {
        let stsData: any = {
            "color": this.getColor(status),
            "char": this.getChar(status),
        };
        return stsData;
    }
    getColor(status: number) {
        let colorList =  new Map<number, string> ();
        colorList.set(0, "secondary");
        colorList.set(1, "favorite");
        colorList.set(2, "danger");
        colorList.set(3, "nav");
        return colorList.get(status);
    }

    getChar(status) {
        let charList =  new Map<number, string> ();
        charList.set(0, "A");
        charList.set(1, "P");
        charList.set(2, "E");
        charList.set(3, "F");
        return charList.get(status);
    }

}