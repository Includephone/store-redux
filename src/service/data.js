export default class Data{
    items=[
        {
            id:1,
            title:'title 1',
            ldesc: 'ldesc 1',
            description: 'description 1',
            price: 10,
            urlImg: 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png'
        },
        {
            id:2,
            title:'title 2',
            ldesc: 'ldesc 2',
            description: 'description 2',
            price: 2,
            urlImg: 'https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png'
        }
    ];

    getData(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(this.items)
            }, 850); 
        });
    };

    getItem(id){
        return new Promise((resolve)=>{
            resolve(this.items.find((item)=>item.id==id))
        });
    }
}