// Datos de las gorras extraídos automáticamente
const rawData = `RichardBohz	26.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786919379/Gorra_Rich_Bohz_26.50.jpg
777	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786919371/Gorra_777.jpg
Gorra A	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786916390/Gorra_A_16_3.jpg
Gorra A	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786916389/Gorra_A_16_2.jpg
Gorra A	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786916387/Gorra_A_16_1.1.jpg
Gorra A	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916386/Gorra_A_15.jpg
Gorra A	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916385/Gorra_A_15_3.jpg
Gorra A	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916382/Gorra_A_15_2.jpg
Gorra A	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916379/Gorra_A_15_1.1.jpg
Gorra A	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786916377/Gorra_A_s_16.jpg
Gorra A	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916376/Gorra_A_s_15.jpg
Gorra A	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916374/Gorra_A_s_15_2.jpg
Gorra A	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916373/Gorra_A_s_15_1.jpg
Goora A	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916371/Gorra_A_s_15_0.jpg
Gorra A	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786916370/Gorra_A_16.jpg
Gorra Apostar o morir	21	https://res.cloudinary.com/wstd8asg/image/upload/v1786916436/Gorra_Apostar_o_morir_21.jpg
Gorra Astros	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786916475/Gorra_Astros_16.jpg
Gorra B Stars	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916589/Gorra_B_15_1.1.jpg
Gorra B	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916586/Gorra_B_15_1.jpg
Gorra B	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916584/Gorra_B_15.jpg
Gorra B	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916581/Gorra_H_Star_15.jpg
Gorra B	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786916578/Gorra_BBB_24.5.jpg
Gorra B	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786916578/Gorra_BBB_24.5.jpg
Gorra B	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916568/Gorra_B_15_3.jpg
Gorra B	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916565/Gorra_B_15_2.0.jpg
Gorra B	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916562/Gorra_B_15_2.jpg
Gorra Baez	26.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786916658/GORRA_BAEZ_X_MAESTRO_SHIFU_26.50.jpg
Gorra Barbas Hats	40	https://res.cloudinary.com/wstd8asg/image/upload/v1786918002/Gorra_Barba_Hats_40_2.jpg
Gorra Barbas Hats	40	https://res.cloudinary.com/wstd8asg/image/upload/v1786917994/Gorra_Barba_Hats_40_1.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916201/Bass_Pro_Shops_20_3.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916201/Bass_Pro_Shops_20_2.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916200/Bass_Pro_Shops_20_1.jpg
Gorra Bass Pro Shops	22.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786916200/Gorra_Bass_Pro_Shops_22.50.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916199/Bass_Pro_Shops_20_8.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916199/Bass_Pro_Shops_20_9.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916199/Bass_Pro_Shops_20_10.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916199/Bass_Pro_Shops_20_7.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916199/Bass_Pro_Shops_20_5.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916198/Bass_Pro_Shops_20_6.jpg
Gorra Bass Pro Shops	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786916198/Bass_Pro_Shops_20_4.jpg
Gorra Boston	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916690/Gorra_Boston.jpg
Gorra Boston	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916686/Gorra_Boston_15.jpg
Gorra Cartas	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786918054/Gorra_cartas_19_3.jpg
Gorra Cartas	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786918046/Gorra_cartas_19_2.jpg
Gorra Cartas	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786918037/Gorra_cartas_19_1.jpg
Gorra Cartas	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918028/Gorra_cartas_24.50_2.jpg
Gorra Chicago bulls	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916742/Gorra_Chicago_Bulls_15.jpg
Gorra Chicago bulls	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916739/Gorra_Chicago_bulls_15_2.jpg
Gorra Cruces	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916830/Gorra_Cruces_25.jpg
Gorra Cruces	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786916826/Gorra_Cruces_23.jpg
Gorra Cruces	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786916822/Gorra_Cartas_24.50.jpg
Gorra Cruces	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786916818/Gorras_cruces_23_2.jpg
Gorra Cruces	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786916814/Gorras_cruces_23_1.jpg
Gorra Cruces	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786916810/Gorra_crus_25_2.jpg
Gorra Cruces	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786916807/Gorra_crus_25_1.jpg
Gorra Cruces	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786916803/Gorra_Crus_23.jpg
Gorra Cruces	22.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786916799/Gorra_Crus_22.50.jpg
Gorra Cruces	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786916795/Gorra_Cruces_24_2.jpg
Gorra Cruces	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786916791/Gorra_Cruces_24_1.jpg
Gorra Cruces	23.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786916788/Gorra_Cruces_23.5.jpg
Gorra Cuerno De Chivo	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786916864/Gorra_Cuerno_De_Chivo.jpg
Gorra Dandy Hats	40	https://res.cloudinary.com/wstd8asg/image/upload/v1786918106/Dandy_hats_40_2.jpg
Gorra Dandy Hats	40	https://res.cloudinary.com/wstd8asg/image/upload/v1786918095/Dandy_hats_40_1.jpg
Gorra Dandy Hats	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786918087/Gorra_Dandy_Hats_25.jpg
Gorra Dandy Hats	40	https://res.cloudinary.com/wstd8asg/image/upload/v1786918079/Dandy_hats_40_5.jpg
Gorra Dandy Hats	40	https://res.cloudinary.com/wstd8asg/image/upload/v1786918070/Dandy_hats_40_4.jpg
Gorra Dandy Hats	40	https://res.cloudinary.com/wstd8asg/image/upload/v1786918063/Dandy_hats_40_3.jpg
Gorra Death	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786916888/Gorra_Death_24.50.jpg
Gorra Dudges	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786916918/Gorra_Dodgers_16.jpg
Gorra Florida 	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786916955/Gorra_Florida_15.jpg
Gorra H Starts	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786916992/Gorra_H_stars_25.jpg
Gorra Kekless	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917036/Gorra_KeckLess_24.5.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918532/Gorra_LA_15_2.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918523/Gorra_LA_15_1.1.jpg
Gorra LA	25.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918515/Gorra_LA_25.50.jpg
Gorra LA	25.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918508/Gorra_LA_25.50_2.jpg
Gorra LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786918499/Gorra_LA_24.jpg
Gorra LA	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918491/Gorra_LA_24.5.jpg
Gorra LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786918483/Gorra_LA_24_2.jpg
Gorra LA	23.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918475/Gorra_LA_23.5.jpg
Gorra LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786918467/Gorra_LA_19_2.jpg
Gorra LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786918459/Gorra_LA_19_1.jpg
Gorra LA	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786918452/Gorra_LA_16.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918444/Gorra_LA_15.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918436/Gorra_LA_15_13.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918428/Gorra_LA_15_12.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918419/Gorra_LA_15_11.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918411/Gorra_LA_15_10.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918403/Gorra_LA_15_9.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918395/Gorra_LA_15_8.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918387/Gorra_LA_15_7.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918379/Gorra_LA_15_6.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918371/Gorra_LA_15_5.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918363/Gorra_LA_15_4.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918356/Gorra_LA_15_3.jpg
Gorra LA	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918340/Gorra_LA_25_2.jpg
Gorra LA	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786918332/Gorra_LA_25_1.jpg
Gorra LA	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918316/Gorra_LA_24_5.jpg
Gorra LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786918308/Gorra_LA_24_4.jpg
Gorra LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786918300/Gorra_LA_24_3.jpg
Gorra LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786918284/Gorra_LA_24_1.jpg
Gorra LA	22.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918276/Gorra_LA_22_50.jpg
Gorra LA	22	https://res.cloudinary.com/wstd8asg/image/upload/v1786918269/Gorra_LA_22_2.jpg
Gorra LA	22	https://res.cloudinary.com/wstd8asg/image/upload/v1786918261/Gorra_LA_22_1.jpg
Gorra LA	16.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918245/Gorra_LA_16.50.jpg
Gorra LA	16.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918237/Gorra_LA_16.50_2.jpg
Gorra LA	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786918229/Gorra_LA_16_4.jpg
Gorra LA	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786918222/Gorra_LA_16_3.jpg
Gorra LA	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786918214/Gorra_LA_16_2.jpg
Gorra LA	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786918197/Gorra_LA_16_1.1.jpg
Gorra LA	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786918189/Gorra_LA_16_1.jpg
Gorra LA	15.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918173/Gorra_LA_15.50_1..jpg
Gorra LALALA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786917089/Gorra_LALALA_Rosada_24.jpg
Gorra LALALA	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917084/Gorra_LALALA_24.50.jpg
Gorra LALALA	23.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917079/Gorra_LALALA_23.5.jpg
Gorra LALALA	23.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917074/Gorra_LALALA_star_23.5.jpg
Gorra LALALA	23.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917069/Gorra_LALALA_star_23.5_2.jpg
Gorra Letra	16.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917132/Gorra_letras_chinas_16.50.jpg
Gorra Letra	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786917127/Gorra_Letra_china_16.jpg
Gorra Lobo 	25.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917159/Gorra_lobo_25.50.jpg
Gorra Mago	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786917186/Gorra_Mago_25.jpg
MexiCap	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917239/Gorra_Mexicaps_15.jpg
MexiCap	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786917233/Gorra_Mexicap_25.jpg
MexiCap	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786917227/Gorra_Mexicap_19.jpg
MexiCap	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917221/Gorra_Mexicap_15.jpg
MexiCap	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917215/Gorra_Mexicap_15_2.jpg
Gorra MuraTravis	22.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917273/Gorra_Muratravis_22.50.jpg
Gorra MuraTravis	22.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917266/Gorra_Muratravis_22.5.jpg
Gorra Natanael Cano	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786918596/Gorra_Natanael_cano_24.jpg
Gorra Natanael Cano	24.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918589/Gorra_natanael_cano_24.50.jpg
Gorra Natanael Cano	21	https://res.cloudinary.com/wstd8asg/image/upload/v1786918581/Gorra_natanael_cano_21.jpg
Gorra Natanael Cano	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786918572/5087010191269629290.jpg
Gorra Natanael Cano	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786918564/5087010191269629287.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786919182/Gorra_New_York_15_5.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786919174/Gorra_New_York_15_4.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786919166/Gorra_New_York_15_3.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786919158/Gorra_New_York_15_2.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786919150/Gorra_New_York_15_1.jpg
Gorra New York	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786919141/Gorra_New_York_25.jpg
Gorra New York	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919133/Gorra_NEW_YORK_24_2.jpg
Gorra New York	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919125/Gorra_NEW_YORK_24_1.jpg
Gorra New York	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786919117/Gorra_New_York_23.jpg
Gorra New York	23.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786919109/Gorra_New_York_23.5.jpg
Gorra New York	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786919100/Gorra_New_York_16.jpg
Gorra New York	16.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786919093/Gorra_New_York_16_5.jpg
Gorra New York	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786919085/Gorra_New_York_16_4.jpg
Gorra New York	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786919063/Gorra_New_York_16_3.jpg
Gorra New York	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786919046/Gorra_New_York_16_2.jpg
Gorra New York	16	https://res.cloudinary.com/wstd8asg/image/upload/v1786919015/Gorra_New_York_16_1.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786919008/Gorra_New_York_15.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918999/Gorra_New_York_15..jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918991/Gorra_New_York_15_10.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918983/Gorra_New_York_15_9.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918976/Gorra_New_York_15_8.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918968/Gorra_new_York_15_7.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918959/Gorra_New_York_15_6.jpg
Gorra New York	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786918885/Gorra_NEW_YORJ_24.jpg
Gorra New York	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786918877/Gorras_New_York_25_2.jpg
Gorra New York	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786918869/Gorras_New_York_25_1.jpg
Gorra New York	21	https://res.cloudinary.com/wstd8asg/image/upload/v1786918861/Gorras_New_York_21_4.jpg
Gorra New York	21	https://res.cloudinary.com/wstd8asg/image/upload/v1786918852/Gorras_New_York_21_3.jpg
Gorra New York	21	https://res.cloudinary.com/wstd8asg/image/upload/v1786918844/Gorras_New_York_21_2.jpg
Gorra New York	21	https://res.cloudinary.com/wstd8asg/image/upload/v1786918836/Gorras_New_York_21_1.jpg
Gorra New York	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786918828/Gorra_NY_x_LA_23.jpg
Gorra New York	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786918820/Gorra_NY_x_La_23_2.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918812/Gorra_New_Yourk_15.jpg
Gorra New York	16.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786918803/Gorra_New_York_16.5.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918787/Gorra_New_York_15_15.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918778/Gorra_New_York_15_14.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918770/Gorra_New_York_15_13.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918762/Gorra_New_York_15_12.jpg
Gorra New York	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786918753/Gorra_New_York_15_11.jpg
Gorra Obeja Negra	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786919263/Gorra_Oveja_negra_25_2.jpg
Gorra Obeja Negra	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786919253/Gorra_Oveja_negra_25_1.jpg
Gorra Obeja Negra	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786919243/Gorra_oveja_negra_19_2.jpg
Gorra Obeja Negra	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786919234/Gorra_oveja_negra_19_1.jpg
Gorra Obeja Negra	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919225/Gorra_de_Oveja_negra_24_2.jpg
Gorra Obeja Negra	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919215/Gorra_de_Oveja_negra_24_1.jpg
Gorra P	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917295/Gorra_P_15.jpg
Gorra Pink Panter	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786917352/Gorra_Pink_Panter_19_1.jpg
Gorra Pink Panter	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786917346/Gorra_Panther_Belik_24.jpg
Gorra Pink Panter	22.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917341/Gorra_Pink_panter_22_50.jpg
Gorra Pink Panter	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786917335/Gorra_Pink_Panter_19_3.jpg
Gorra Pink Panter	19	https://res.cloudinary.com/wstd8asg/image/upload/v1786917330/Gorra_Pink_Panter_19_2.jpg
Gorra PR	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917410/Gorra_PR_15.jpg
Gorra Rabel	26	https://res.cloudinary.com/wstd8asg/image/upload/v1786917449/Gorra_Rebel_26_1.jpg
Gorra Rabel	26	https://res.cloudinary.com/wstd8asg/image/upload/v1786917441/Gorra_Rebel_26_2.jpg
Gorra Raiders	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917483/Gorra_Raiders_15.jpg
Gorra Raiders	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917477/Gorra_Raiders_15_3.jpg
Gorra Raiders	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917469/Gorra_Raiders_15_2.jpg
Gorra Rays	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917500/Gorra_Rays_15.jpg
Gorra Rico Muerto	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786917549/Gorra_Rico_o_Muerto_25.jpg
Gorra Rico Muerto	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786917543/gorra_rico_o_muerto_25_2.jpg
Gorra Rosarios	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919288/Gorra_Rosario_24_3.jpg
Gorra Rosarios	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919280/Gorra_Rosario_24_2.jpg
Gorra Rosarios	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919272/Gorra_Rosario_24_1.jpg
Gorra Rosones	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786919297/Gorras_rosones_23.jpg
Gorra Ruleta	23.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786917570/Gorra_ruleta_23.50.jpg
Gorra San Diego	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786917599/Gorra_San_diego_25.jpg
Gorrsa San Judas	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786917682/Gorra_san_Judas_24_4.jpg
Gorrsa San Judas	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786917673/Gorra_san_Judas_24_3.jpg
Gorrsa San Judas	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786917666/Gorra_san_Judas_24_2.jpg
Gorrsa San Judas	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786917659/Gorra_san_Judas_24_1.jpg
Gorrsa San Judas	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786917651/Gorra_San_judas_23.jpg
Gorra San Of God Mishu	30	https://res.cloudinary.com/wstd8asg/image/upload/v1786917689/Gorra_Son_of_God_Maestro_Shifu_30.jpg
Goora Santa Muerte	22.5	https://res.cloudinary.com/wstd8asg/image/upload/v1786919361/Gorras_de_la_santa_muerte_22.50.jpg
Goora Santa Muerte	25	https://res.cloudinary.com/wstd8asg/image/upload/v1786919352/Gorra_Santa_muerte_25.jpg
Goora Santa Muerte	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919343/Gorra_santa_muerte_24.jpg
Goora Santa Muerte	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919332/Gorra_de_santa_muerte_24.jpg
Goora Santa Muerte	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786919323/Gorra_de_santa_muerte_24_2.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917827/Gorra_sox_15_2.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917820/Gorra_SOX_15.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917811/Gorra_SOX_15_11.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917802/Gorra_sox_15_10.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917795/Gorra_sox_15_9.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917787/Gorra_sox_15_8.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917780/Gorra_sox_15_7.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917773/Gorra_sox_15_6.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917765/Gorra_Sox_15_5.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917758/Gorra_Sox_15_4.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917750/Gorra_sox_15_3.jpg
Gorra Sox	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917735/Gorra_sox_15_1.jpg
Gorra Sox	22	https://res.cloudinary.com/wstd8asg/image/upload/v1786917728/Gorra_SOX_22.jpg
Gorra Supreme	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917868/Gorra_Suprime_15_5.jpg
Gorra Supreme	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917859/Gorra_Suprime_15_4.jpg
Gorra Supreme	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917852/Gorra_Suprime_15_3.jpg
Gorra Supreme	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917844/Gorra_Suprime_15_2.jpg
Gorra Supreme	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917835/Gorra_Suprime_15_1.jpg
Gorra Thirthly One 	40	https://res.cloudinary.com/wstd8asg/image/upload/v1786917876/Gorra_Thirty_One_40.jpg
Gorra Trebol	15	https://res.cloudinary.com/wstd8asg/image/upload/v1786917899/Gorra_Trebol_15.jpg
Gorra Trebol	23	https://res.cloudinary.com/wstd8asg/image/upload/v1786917892/Gorra_trebol_23.jpg
Gorra Wstcol	30	https://res.cloudinary.com/wstd8asg/image/upload/v1786917985/Gorra_westcol_y_kris_R_30_2.jpg
Gorra Wstcol	30	https://res.cloudinary.com/wstd8asg/image/upload/v1786917976/Gorra_westcol_y_kris_R_30_1.jpg
Gorra Wstcol	20	https://res.cloudinary.com/wstd8asg/image/upload/v1786917968/Gorra_Westcol_y_Bleesd_20.jpg
Gorra Wstcol	24	https://res.cloudinary.com/wstd8asg/image/upload/v1786917959/Gorra_Wescol_24.jpg`;

const products = [];
let idCounter = 1;

rawData.split('\n').forEach(line => {
    if (!line.trim()) return;
    const parts = line.split('\t');
    if (parts.length >= 3) {
        let name = parts[0].trim();
        let price = parseFloat(parts[1].trim());
        let imageUrl = parts[2].trim();
        
        // Determinar categoría por nombre
        let category = "urban";
        let nameLower = name.toLowerCase();
        if (nameLower.match(/astros|boston|dodges|dudges|la|new york|san diego|sox|rays|florida|chicago|bulls|raiders/)) category = "sports";
        else if (nameLower.match(/san judas|cruces|santa muerte|rosario|rosone|dios|god|mishu/)) category = "religious";
        else if (nameLower.match(/barbas|dandy|supreme|thirthly/)) category = "premium";
        else if (nameLower.match(/natanael|wstcol|muratravis|baez|richardbohz/)) category = "collab";
        else if (nameLower.match(/cartas|ruleta|apostar/)) category = "casino";

        products.push({
            id: idCounter++,
            name: name,
            category: category,
            price: price,
            imageIcon: "ph-crown",
            imageUrl: imageUrl,
            desc: "Gorra exclusiva de nuestra colección. Calidad de importación."
        });
    }
});


// Estado del carrito
let cart = [];

// Elementos del DOM
const productGrid = document.getElementById('product-grid');
const cartButton = document.getElementById('cart-button');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartBadge = document.getElementById('cart-badge');
const totalPriceEl = document.getElementById('total-price');
const toastContainer = document.getElementById('toast-container');
const checkoutButton = document.getElementById('checkout-button');
const header = document.querySelector('.header');

// Herramientas del catálogo
const searchInput = document.getElementById('product-search');
const sortSelect = document.getElementById('product-sort');
const catalogCount = document.getElementById('catalog-count');

// Modal Elementos
const modalOverlay = document.getElementById('quick-view-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalPrice = document.getElementById('modal-price');
const modalAddBtn = document.getElementById('modal-add-btn');

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer para Animaciones Reveal
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// Catálogo: "Todas", búsqueda y ordenamiento
function getCatalogProducts() {
    const term = (searchInput?.value || '').trim().toLowerCase();

    let result = products.filter(product => {
        if (!term) return true;

        return (
            product.name.toLowerCase().includes(term) ||
            product.price.toString().includes(term)
        );
    });

    const sort = sortSelect?.value || 'featured';

    if (sort === 'price-low') {
        result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        result.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
        result.sort((a, b) =>
            a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
        );
    }

    return result;
}

function renderCatalog() {
    if (!productGrid) return;

    productGrid.innerHTML = '';

    const visibleProducts = getCatalogProducts();

    if (catalogCount) {
        catalogCount.textContent =
            `${visibleProducts.length} ${visibleProducts.length === 1 ? 'modelo' : 'modelos'}`;
    }

    if (visibleProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="catalog-empty">
                <i class="ph ph-magnifying-glass"></i>
                <h3>No encontramos esa gorra</h3>
                <p>Prueba con otro nombre o limpia la búsqueda para ver toda la colección.</p>
                <button type="button" onclick="clearProductSearch()">Ver todas</button>
            </div>
        `;
        return;
    }

    visibleProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card reveal active';

        const imageHTML = product.imageUrl
            ? `<img src="${product.imageUrl}" alt="${product.name}" class="product-img" loading="lazy">`
            : `<i class="ph ${product.imageIcon} img-placeholder"></i>`;

        card.innerHTML = `
            <div class="product-image-container" onclick="openModal(${product.id})">
                ${imageHTML}
            </div>

            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span>$</span>${product.price.toFixed(2)}
                </div>
            </div>

            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Añadir al Carrito
            </button>
        `;

        productGrid.appendChild(card);
    });
}

function clearProductSearch() {
    if (searchInput) {
        searchInput.value = '';
    }

    if (sortSelect) {
        sortSelect.value = 'featured';
    }

    renderCatalog();
}

// Buscar mientras escribes
if (searchInput) {
    searchInput.addEventListener('input', renderCatalog);
}

// Ordenar al cambiar el selector
if (sortSelect) {
    sortSelect.addEventListener('change', renderCatalog);
}

// Modal Logic
let currentModalProductId = null;

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if(!product) return;

    currentModalProductId = productId;
    
    const modalImageContainer = document.querySelector('.modal-image');
    if (product.imageUrl) {
        modalImageContainer.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}" class="modal-real-img" id="modal-icon">`;
    } else {
        modalImageContainer.innerHTML = `<i id="modal-icon" class="ph ${product.imageIcon}"></i>`;
    }
    
    document.getElementById('modal-title').textContent = product.name;
    modalCategory.textContent = "Colección Top Style";
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    document.querySelector('.modal-description').textContent = product.desc;

    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

modalAddBtn.addEventListener('click', () => {
    if(currentModalProductId) {
        addToCart(currentModalProductId);
        closeModal();
    }
});


// Funciones del Carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`¡${product.name} añadida a tu corona!`);
    
    cartButton.classList.remove('pulse-anim');
    void cartButton.offsetWidth;
    cartButton.classList.add('pulse-anim');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;

    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Aún no has elegido tu corona.</div>';
        return;
    }

    cart.forEach(item => {
        let cartImageHTML = item.imageUrl 
            ? `<img src="${item.imageUrl}" alt="${item.name}" class="cart-real-img">`
            : `<i class="ph ${item.imageIcon}" style="color: var(--accent-gold); font-size: 2rem;"></i>`;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="cart-item-img">
                ${cartImageHTML}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Eliminar">
                <i class="ph ph-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

cartButton.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="ph ph-check-circle"></i>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// Checkout (Redirección a Instagram)
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. ¡Elige una corona primero!");
        return;
    }
    
    let orderMessage = "¡Hola Top Style Caps! Quiero hacer el siguiente pedido:\n\n";
    cart.forEach(item => {
        orderMessage += `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})\n`;
    });
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderMessage += `\nTotal a pagar: $${totalPrice.toFixed(2)}\n\n¿Me pueden confirmar disponibilidad para hacer el pago?`;

    navigator.clipboard.writeText(orderMessage).then(() => {
        alert("¡Tu pedido ha sido copiado al portapapeles!\n\nTe redirigiremos a nuestro Instagram. Solo tienes que pegarlo en un mensaje directo (DM) para concretar tu compra.");
        window.open("https://www.instagram.com/top.style.cap/", "_blank");
        cart = [];
        updateCartUI();
        toggleCart();
    }).catch(err => {
        alert("Te redirigiremos a nuestro Instagram para concretar la compra. ¡Escríbenos por DM!");
        window.open("https://www.instagram.com/top.style.cap/", "_blank");
        cart = [];
        updateCartUI();
        toggleCart();
    });
});


// Asistente de compra Top Style IA
const assistant = document.getElementById('shopping-assistant');
const assistantToggle = document.getElementById('assistant-toggle');
const assistantClose = document.getElementById('assistant-close');
const assistantPanel = assistant?.querySelector('.assistant-panel');
const assistantMessages = document.getElementById('assistant-messages');
const assistantForm = document.getElementById('assistant-form');
const assistantInput = document.getElementById('assistant-input');
const assistantSuggestions = document.querySelectorAll('[data-assistant]');

function toggleAssistant(force) {
    if (!assistant || !assistantPanel) return;
    const open = typeof force === 'boolean' ? force : !assistant.classList.contains('open');
    assistant.classList.toggle('open', open);
    assistantToggle?.setAttribute('aria-expanded', String(open));
    assistantPanel.setAttribute('aria-hidden', String(!open));
    if (open) setTimeout(() => assistantInput?.focus(), 120);
}

assistantToggle?.addEventListener('click', () => toggleAssistant());
assistantClose?.addEventListener('click', () => toggleAssistant(false));

function addAssistantMessage(text, type = 'bot') {
    if (!assistantMessages) return;
    const message = document.createElement('div');
    message.className = `assistant-message ${type}`;
    message.innerHTML = type === 'bot'
        ? `<span class="message-avatar"><i class="ph ph-sparkle"></i></span><div>${text}</div>`
        : `<div>${text}</div>`;
    assistantMessages.appendChild(message);
    assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function money(value) {
    return `$${Number(value).toFixed(2)}`;
}

function recommendProducts(message) {
    const text = message.toLowerCase();
    let matches = [...products];

    const budgetMatch = text.match(/(?:\$|usd|dólares?|presupuesto|máximo|maximo|menos de|hasta)\s*(\d+(?:[.,]\d+)?)/i);
    if (budgetMatch) {
        const budget = parseFloat(budgetMatch[1].replace(',', '.'));
        matches = matches.filter(p => p.price <= budget);
    }

    if (/barat|económ|menos|presupuesto|precio bajo|low/i.test(text)) {
        matches.sort((a, b) => a.price - b.price);
    } else if (/cara|premium|exclusiv|lujo/i.test(text)) {
        matches.sort((a, b) => b.price - a.price);
    }

    const keywordGroups = [
        { re: /deport|nba|baseball|boston|york|la |bulls|raiders|astros/i, terms: ['sports', 'new york', 'la', 'boston', 'bulls', 'raiders', 'astros'] },
        { re: /colab|artista|natanael|wstcol|muratravis|baez|richard/i, terms: ['natanael', 'wstcol', 'muratravis', 'baez', 'richard'] },
        { re: /cartas|casino|ruleta|apostar/i, terms: ['cartas', 'ruleta', 'apostar'] },
        { re: /relig|santa|judas|cruz|dios|oveja/i, terms: ['san judas', 'santa', 'cruces', 'dios', 'oveja'] }
    ];

    const group = keywordGroups.find(g => g.re.test(text));
    if (group) {
        const specific = matches.filter(p => group.terms.some(term => p.name.toLowerCase().includes(term)));
        if (specific.length) matches = specific;
    }

    return matches.slice(0, 3);
}

function assistantReply(message) {
    const text = message.toLowerCase();

    if (/cómo compro|como compro|comprar|pedido|pago|finalizar|checkout|instagram|ig|dm/i.test(text)) {
        return `Facilísimo 👌 Elige una o varias gorras, añádelas al carrito y pulsa <strong>“Finalizar pedido”</strong>. Te prepararé el mensaje con tu pedido y te llevaré al Instagram oficial <strong>@top.style.cap</strong> para confirmar disponibilidad y pago.`;
    }

    if (/hola|hey|buenas|ayuda|ayúdame|ayudame/i.test(text)) {
        return `¡Claro! 😎 Puedo ayudarte a encontrar modelos por <strong>precio, estilo o nombre</strong>. Por ejemplo: “quiero algo de menos de $20” o “busco una deportiva”.`;
    }

    if (/instagram|ig|redes|tiktok/i.test(text)) {
        return `Nuestro Instagram es <strong>@top.style.cap</strong>. Desde ahí puedes hablar directamente con Top Style y confirmar tu compra. También tienes el botón de Instagram aquí abajo.`;
    }

    const recommendations = recommendProducts(message);
    if (recommendations.length) {
        const names = recommendations.map(p => `<strong>${p.name}</strong> — ${money(p.price)}`).join('<br>');
        return `Mira estas opciones que encontré para ti 👇<br>${names}<br><br>Si alguna te gusta, toca su tarjeta para verla y añadirla al carrito.`;
    }

    const exact = products.find(p => p.name.toLowerCase().includes(text.trim()));
    if (exact) {
        return `Encontré <strong>${exact.name}</strong> por <strong>${money(exact.price)}</strong>. Puedes buscarla en el catálogo o decirme “añádela” y te indico el siguiente paso.`;
    }

    return `Puedo afinar la búsqueda si me das una pista. Prueba con <strong>“menos de $20”</strong>, <strong>“quiero algo deportivo”</strong>, <strong>“busco una colaboración”</strong> o dime el nombre de una gorra.`;
}

function handleAssistantMessage(text) {
    const clean = text.trim();
    if (!clean) return;

    addAssistantMessage(clean, 'user');

    const lower = clean.toLowerCase();
    const addMatch = lower.match(/(?:añade|anade|agrega|mete|quiero)\s+(?:la\s+)?(.+)/i);
    if (addMatch && /añade|anade|agrega|mete/.test(lower)) {
        const product = products.find(p => p.name.toLowerCase().includes(addMatch[1].trim()));
        if (product) {
            addToCart(product.id);
            addAssistantMessage(`Listo 😎 Añadí <strong>${product.name}</strong> al carrito por ${money(product.price)}. Cuando quieras, abre el carrito y finaliza tu pedido por Instagram.`);
            return;
        }
    }

    setTimeout(() => addAssistantMessage(assistantReply(clean)), 220);
}

assistantForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = assistantInput?.value || '';
    if (assistantInput) assistantInput.value = '';
    handleAssistantMessage(text);
});

assistantSuggestions.forEach(button => {
    button.addEventListener('click', () => handleAssistantMessage(button.dataset.assistant || ''));
});


document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    updateCartUI();
});
