//No. 1 If-else

var nama ="John"
var peran = "" 
var nama='Jane'
var peran='Penyihir'
var nama ='Jenita'
var peran='Guard'
var nama ='Junaedi'
var peran='WereWolf'

if(nama=='' && peran==''){
    console.log("nama harus diisi!")
}else if(nama=='John' && peran==''){
    console.log("Halo John, pilih peranmu untuk memulai game!")
}else if(nama=='Jane'){
    console.log('Selamat datang di Dunia Werewolf, Jane')
}else if(peran=='Penyihir'){
    console.log('Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!')
}else if(nama=='Jenita'){
    console.log('Selamat datang di Dunia Werewolf, Jenita')
}else if(peran=='Guard'){
    console.log('Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.')
}else if(nama=='Junaedi'){
    console.log('Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!')
}

//no. 2 Switch Case

var tanggal=1;
var tahun=1945;
var bulan=5;
var month=0;

//  Maka hasil yang akan tampil di console adalah: '1 Mei 1945'; 
if(tanggal >= 1 && tanggal <= 31){
    if(bulan>= 1 && bulan <= 12){
        if(tahun >=1900 && tahun <= 2200){
            switch(bulan){
                case 1:
                    month="Januari";
                    break;
                
                case 2:
                    month="February";
                    break;
                
                case 3:
                    month="Maret";
                    break; 
                
                case 4:
                    month="April";
                    break;
                
                case 5:
                    month="Mei";
                    break;
            
                case 6:
                    month="Juni";
                    break;

                case 7:
                    month="Juli";
                    break;
                
                case 8:
                    month="Agustus";
                    break;
                
                case 9:
                    month="September";
                    break;

                case 10:
                    month="Oktober";
                    break;
                
                case 11:
                    month="November";
                    break;
                
                case 12:
                    month="Desember";
                    break;
            }
        }
    }
}
console.log(tanggal +" "+ month+" "+ tahun)