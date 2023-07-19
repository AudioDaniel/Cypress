export class commons{
    find_element(element,position){
        if (position != null){
            return cy.get(element).eq(position)
        } else {
            return cy.get(element)
        }
    }
    click(element,position){
        this.find_element(element,position).click()
    }
    type(element,text,position){
        this.find_element(element,position).type(text)
    }
}