var vm = new Vue({
  el:"#app",  //id 

  data:{
    selectedCategory: '',
    selectedSubCategory: '',
    searchQuery: null,
    Modal: true,
    items:[
      { id:1, title: 'carne de panela peito',img:'./img/carne-de-panela-peito-481.jpg',price:0, datetime:'May 2 2022',category:'vacuno',subcategory:'pulpa'}, 
      { id:2, title: 'Pulpa Pierna Deshuesada 21 kg',img:'./img/8552_pechuga_entera.png',price:100,datetime:'May 2 2022',category:'ave',subcategory:'pechuga' }, 
      { id:3, title:'Costillar de Cerdo Americano 1 kg',img:'./img/8711_costillar_am.png', price:200, datetime:'',category:'cerdo', subcategory:'costilla'},
      { id:4, title:'Muslo de Pollo 1kg',img:'./img/muslo-pollo.jpeg', price:200, datetime:'',category:'ave', subcategory:'muslo'},
      { id:5, title:'pulpa de cerdo',img:'./img/pulpa-de-cerdo.png', price:200, datetime:'',category:'cerdo', subcategory:'pulpa'},
      { id:6, title:'pechuga de pollo',img:'./img/images.jpeg', price:200, datetime:'',category:'ave', subcategory:'pechuga'},
      {id:7, title:'carne molida', img:'./img/carne-molida.jpeg',price:200, datetime:'',category:'vacuno', subcategory:'molida'},
      {id:8, title:'huevo de gallina tamaño mediano', img:'./img/huevo.jpeg',price:200, datetime:'',category:'huevo', subcategory:'gallina'}

    ]
  },
 
  methods:  {
      showModal: function(event){
        this.Modal = event
      },
      updateCategory: function(event){
        this.selectedSubCategory = ''
        this.searchQuery= null
      },
      filterItemsByCategory: function(items){
        return items.filter(item => !item.category.indexOf(this.selectedCategory))
      },
      filterItemsBySubcat: function(items){
        return items.filter(item => !item.subcategory.indexOf(this.selectedSubCategory))
      },
  },
  computed:{
    all_products(){
		  return this.filter_items2.length;
		},
    filter_items: function(){
      return this.filterItemsByCategory(this.items)
    },
    filter_items2: function(){
      return this.filterItemsBySubcat(this.filterItemsByCategory(this.items))
    },
    resultQuery(){
      if(this.searchQuery){
        this.selectedSubCategory = ''
        this.selectedCategory = ''
        return this.filter_items2.filter((items)=>{
          return items.title.toLowerCase().startsWith(this.searchQuery.toLowerCase());
        })
        }else{
          return this.filter_items2;
        }
    },
  },
  destroyed: function () {
      console.log('Vue instance was destroyed')
  }
})


