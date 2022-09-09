
let MobileShop=[{Name:"Oppo", Model:"oppoa54",ram: 2, rom: 256,price: 3000,},
                {Name:"Oppo", Model:"oppoF9",ram: 2, rom: 256,price: 3000,},
                {Name:"Oppo", Model:"oppoF7",ram: 2, rom: 256,price: 3000,},
                {Name:"Oppo", Model:"oppoa52",ram: 2, rom: 256,price: 3000,},
                // 2nd compnay 
                {Name:"Iphone", Model:"v14pro:", ram: 2, rom: 256,price: 303000,},
                {Name:"Iphone", Model:"v13pro:", ram: 2, rom: 256,price: 303000,},
                {Name:"Iphone", Model:"v12pro:", ram: 2, rom: 256,price: 303000,},
                {Name:"Iphone", Model:"v11pro:", ram: 2, rom: 256,price: 303000,},
                // 3dr companyName
                {Name:"samsung", Model:"note1:", ram: 2, rom: 256,price: 40999,},
                {Name:"samsung", Model:"a51:", ram: 2, rom: 256,price: 40999,},
                {Name:"samsung", Model:"s20ultra:", ram: 2, rom: 256,price: 40999,},
                {Name:"samsung", Model:"a72:", ram: 2, rom: 256,price: 40999,},
                // 4th companyName
                {Name:"xaomi", Model:"mi11:", ram: 2, rom: 256,price: 40999,},
                {Name:"xaomi", Model:"redminote10:", ram: 2, rom: 256,price: 40999,},
                {Name:"xaomi", Model:"s20ultra:", ram: 2, rom: 256,price: 40999,},
                {Name:"xaomi", Model:"minote10lite:", ram: 2, rom: 256,price: 40999,},
    ]

let companyName=document.getElementById("companyName")
let modelName=document.getElementById("modelName")
let list=document.getElementById("list")

// Filling CompanyNames :
    // MobileShop.Map(function(b){
    //     if( b = "Oppo" ){
    //         console.log("yes")
            
    //     }
    //     else{
    //         console.log("a;li")
            
    //     }
    // })
    function FillMobileCompany(){
        companyName.innerHTML="";
        // let MobileCompanyName = MobileShop.filter(function(N){
        //     return N;
        // })

        // MobileCompanyName.map(function(CN){

        //     // console.log(CN.Name)
        //     companyName.innerHTML=`<option value="${CN.Name}">${CN.Name}</option>`
            
        // })
        // // console.log(CompanyName)
        
        // MobileCompanyName.map(function(McompanyName){
        //     companyName.innerHTML += `<option value="${McompanyName.Name}">${McompanyName.Name}</option>`    
        // }) 
        let company = MobileShop.filter((value, index, full) =>
        index === full.findIndex((M) => (
            M.place === value.place && M.Name === value.Name
        ))
    )
    company.map(companyN => companyName.innerHTML += `<option value="${companyN.Name}">${companyN.Name}</option>`)
}
FillMobileCompany()
    

// Fillnasted Model 

function FillNasted(){
    modelName.disabled = false;
    modelName.innerHTML="";
    let MN = companyName.value;
    let modalArr = MobileShop.filter(values => values.Name === MN)
    modalArr.map( value => modelName.innerHTML += `<option value="${value.Model}">${value.Model}</option>`)

    // let modelOfMobile = MobileShop.filter(function(MobileShop){
    //    return MobileShop;
    // })
    // console.log(modelOfMobile)
    // modelOfMobile.map(function (MD){
    //    modelName.innerHTML += `<option value="${MD.Model}">${MD.Model}</option>` 
    // })
    // modelOfMobile.map(function (M){
    //     modelName.innerHTML= `<option value="${M}">${M}</option>`  
    // } )

    // modelOfMobile.map(function(Value){
    //     // modelName.innerHTML += `<option value="${Value.Model}">${Value.Model}</option>`   
    //     console.log(Value.Model) 
    // }) 
    // console.log(MN)
    // console.log(value)
}


// FillNasted()

// Search Function run on button 

function AllFeatures(){
    let MM = modelName.value;
    let MobileFeatures=MobileShop.filter( MF => MF.Model === MM)
    // list.innerHTML = `<p>${companyName.value}${modelName.value}</p>`
    MobileFeatures.map(details => list.innerHTML += `<ul>
    <li><b>Mobile Name</b> : ${details.Name}</li>
    <li><b>Mobile Model</b> : ${details.Model}</li>
    <li><b>Mobile Ram</b> : ${details.ram}</li>
    <li><b>Mobile Rom</b> : ${details.rom}</li>
    <li><b>Mobile Price</b> : ${details.price}</li>
    </ul>`
    )

}
