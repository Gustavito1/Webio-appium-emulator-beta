import { createModuleResolutionCache } from "typescript";

/**
 * sub page containing specific selectors and methods for a specific page
 */
 class LoginPage{
    /**
     * define selectors using getter methods
     */

     public get closedNavigateUp(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }
    public get inputDestiny() {
        return $('(//android.widget.TextView[@resource-id="com.booking:id/facet_search_box_basic_field_label"])[1]');
    }
    public get inputTextDestiny(){
        return $('//android.widget.EditText[@resource-id="com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"]');
    }
    public get optListDestiny(){
        return $$('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.booking:id/facet_disambiguation_content"]/android.view.ViewGroup/android.widget.TextView[1]');
    }

    public get listMonthYear(){
        return $('')
    }

    public get btnConfirmDate(){
        return $('//android.widget.Button[@resource-id="com.booking:id/facet_date_picker_confirm"]')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */

     public async registerDestiny(Destino): Promise<void> {
        await this.closedNavigateUp.click(); 
        await browser.pause(5000);
        await browser.back();
        await this.inputDestiny.click();
        await browser.pause(5000);
        await this.inputTextDestiny.setValue(Destino)
        await browser.pause(5000)
        this.optListDestiny.forEach(async (item) =>{
            if (await item.getText()==Destino) {
               item.click();
            }
           }) 

    }

    public async setDate(start, end, monthYear){

        const startDay = $(`//android.view.View[@content-desc="${start} ${monthYear}"]`)
        do {
            console.log("WHILE")
            await browser.touchAction([{ action: 'longPress', x: 600, y: 830 }, { action: 'moveTo', x: 600, y: -500 }, 'release'])
        } while (await startDay.isExisting() === false)
        // startDay = await $(`//android.view.View[@content-desc="${start} ${monthYear}"]`);
        await startDay.click();
        await browser.pause(7000);
        const endDay = await $(`//android.view.View[@content-desc="${end} ${monthYear}"]`);
        await endDay.click();
        browser.pause(2000);
        await this.btnConfirmDate.click();
        await browser.pause(5000);
    }
        
        
}

export default new LoginPage();

