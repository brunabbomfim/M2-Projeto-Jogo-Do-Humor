// Constantes criadas para as IDs;
// Constante para botão;
const bt = document.querySelector("#bt"); 
const nome = document.getElementById("nome");
const humor = document.getElementById("humor");
const img = document.querySelector("#img");
// constante para contabilizar a quantidade de clicks;
var count = 0; 
// função para o envento de click do botão;
        bt.addEventListener("click", function (){ 
            nome.style.color = "rgb(204, 0, 177)";
            humor.style.color = "rgb(204, 0, 177)";
// condição do while para retornar ao inicio;
// condicionais if else para modificar fotos e textos;
            do{ 
                if (count == 0){
                    img.setAttribute("src",'./Media/img/moana.jpg') // atribuindo a nova foto após click;
                    nome.textContent = 'Moana'; // atribuindo um novo nome a princesa após click;
                    humor.textContent = 'Desbravadora'; // atribuindo uma nova personalidade a princesa após click;
                    count++; // somando cada click;
                }
                    else if (count == 1){
                        img.setAttribute("src",'./Media/img/vanelope.jpg')
                        nome.textContent = 'Vanellope';
                        humor.textContent = 'Meiguissíma';
                        count++;
                    }
                        else if (count == 2){
                            img.setAttribute("src",'./Media/img/tiana.jpg')
                            nome.textContent = 'Tiana';
                            humor.textContent = 'Destemida';
                            count++;
                        }
                            else if (count == 3){
                                img.setAttribute("src",'./Media/img/rapunzel.jpg')
                                nome.textContent = 'Rapunzel';
                                humor.textContent = 'Romântica';
                                count++
                            } 
                                else if (count == 4){
                                    img.setAttribute("src",'./Media/img/valente.jpg')
                                    nome.textContent = 'Merinda';
                                    humor.textContent = 'Estressadinha';
                                    count = 0; // Zerando o count para retornar ao inicio;
                                }
            } while(count > 5);
});


