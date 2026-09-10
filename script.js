// Datos de las gorras extraídos automáticamente
const rawData = `
CT	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005309/CT_26.jpg
CT	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005306/CT_23.jpg
CT	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005306/CT_27.jpg
Cruz 4	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005306/Cruz_4_13_27.jpg
Cruz	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005306/Cruz_25.jpg
Cruz 4 13	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005305/Cruz_4_13_27_2.jpg
Cruz	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005305/Cruz_24.jpg
Cruses Nergra	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005303/Cruses_Nergra_24.jpg
Cruses Negra	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005302/Cruses_Negra_25.jpg
Cruses Blanca	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005302/Cruses_Blanca_25.jpg
Cruces Corazón	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005301/Cruces_Coraz%C3%B3n_26.jpg
Cruses	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005302/Cruses_25.jpg
Cruses Brillos	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005302/Cruses_Brillos_25.jpg
Crown of Thorns Rude Awakenings	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005301/Crown_of_Thorns_Rude_Awakenings_45.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005299/Chucky_Hats_26.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005299/Chucky_Hats_26_9.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005298/Chucky_Hats_26_8.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005298/Chucky_Hats_26_7.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005297/Chucky_Hats_26_6.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005296/Chucky_Hats_26_5.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005295/Chucky_Hats_26_3.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005295/Chucky_Hats_26_4.jpg
Chrome Hearts	22	https://res.cloudinary.com/wstd8asg/image/upload/v1789005295/Chrome_Hearts_22.jpg
Chucky Hats	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005295/Chucky_Hats_26_2.jpg
Chrome Hearts	22	https://res.cloudinary.com/wstd8asg/image/upload/v1789005295/Chrome_Hearts_22_3.jpg
Chrome Hearts	22	https://res.cloudinary.com/wstd8asg/image/upload/v1789005292/Chrome_Hearts_22_2.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005292/California_19_53.jpg
Cash only	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005291/Cash_only_23_4.jpg
Cash only	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005291/Cash_only_23.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005291/California_19.jpg
Cash only	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005291/Cash_only_23_3.jpg
Cash only	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005291/Cash_only_23_2.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005288/California_19_51.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005288/California_19_52.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005288/California_19_48.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005288/California_19_50.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005288/California_19_49.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005287/California_19_47.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005284/California_19_46.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005284/California_19_45.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005284/California_19_44.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005284/California_19_43.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005284/California_19_42.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005284/California_19_37.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005284/California_19_41.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005280/California_19_39.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005280/California_19_40.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005280/California_19_38.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005280/California_19_35.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005280/California_19_34.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005280/California_19_36.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005280/California_19_33.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005276/California_19_32.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005276/California_19_31.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005276/California_19_26.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005276/California_19_28.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005276/California_19_29.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005276/California_19_30.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005276/California_19_27.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005272/California_19_25.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005272/California_19_20.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005272/California_19_21.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005272/California_19_23.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005272/California_19_24.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005272/California_19_22.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005271/California_19_19.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005268/California_19_16.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005269/California_19_17.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005268/California_19_15.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005268/California_19_14.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005268/California_19_13.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005265/California_19_12.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005264/California_19_11.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005264/California_19_9.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005264/California_19_10.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005264/California_19_8.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005264/California_19_6.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005261/California_19_7.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005261/California_19_5.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005261/California_19_4.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005261/California_19_3.jpg
B-Star Graffiti Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005260/B-Star_Graffiti_Barbas_Hats_45.jpg
California	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005260/California_19_2.jpg
Blessd creses	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005257/Blessd_creses_26.jpg
B-Cross Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005257/B-Cross_Barbas_Hats_45.jpg
Blessed Cruses	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005257/Blessed_Cruses_25.jpg
Billete	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005257/Billete_23.jpg
Billete Monopolio	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005257/Billete_Monopolio_23.jpg
Billete MC pato	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005257/Billete_MC_pato_23.jpg
Bass Pro Shops Brillos	22	https://res.cloudinary.com/wstd8asg/image/upload/v1789005256/Bass_Pro_Shops_Brillos_22.jpg
BBB Blue Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005254/BBB_Blue_Barbas_Hats_45.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005254/Bass_Pro_Shop_21_13.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005254/Bass_Pro_Shop_21.jpg
BBB	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005253/BBB_25.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005253/Bass_Pro_Shop_21_12.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005251/Bass_Pro_Shop_21_11.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005250/Bass_Pro_Shop_21_10.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005250/Bass_Pro_Shop_21_9.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005250/Bass_Pro_Shop_21_8.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005250/Bass_Pro_Shop_21_7.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005247/Bass_Pro_Shop_21_6.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005247/Bass_Pro_Shop_21_5.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005247/Bass_Pro_Shop_21_3.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005247/Bass_Pro_Shop_21_4.jpg
Bass Pro Shop	21	https://res.cloudinary.com/wstd8asg/image/upload/v1789005247/Bass_Pro_Shop_21_2.jpg
Barbas Hats x Lonche Willito	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005246/Barbas_Hats_x_Lonche_Willito_45.jpg
Barbas Hats x CT Rockstar	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005243/Barbas_Hats_x_CT_Rockstar_45.jpg
Barbas Hats Chrome Black	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005243/Barbas_Hats_Chrome_Black_45.jpg
B	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005243/B_19_7.jpg
Barbas Dark Nebula	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005243/Barbas_Dark_Nebula_27.jpg
B Cross Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005243/B_Cross_Barbas_Hats_45.jpg
B	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005243/B_24.jpg
B	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005242/B_19.jpg
B	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005239/B_19_6.jpg
B	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005239/B_19_5.jpg
B	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005239/B_19_4.jpg
B	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005239/B_19_3.jpg
B	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005239/B_19_2.jpg
Astros	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005239/Astros_19.jpg
A s	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005238/A_s_19.jpg
A s	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005235/A_s_19_4.jpg
A	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005235/A_19.jpg
A s	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005235/A_s_19_3.jpg
A	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005234/A_19_7.jpg
A s	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005235/A_s_19_2.jpg
A	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005234/A_19_6.jpg
A	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005234/A_19_8.jpg
A	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005234/A_19_5.jpg
A	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005232/A_19_4.jpg
777	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005231/777_24.jpg
A	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005231/A_19_3.jpg
A	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005231/A_19_2.jpg
727	22	https://res.cloudinary.com/wstd8asg/image/upload/v1789005230/727_22.jpg
333 Rebol Mexicaps	30	https://res.cloudinary.com/wstd8asg/image/upload/v1789005227/333_Rebol_Mexicaps_30.jpg
31 vs The World	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005227/31_vs_The_World_45.jpg
31 Hats X El Mago De East L.A.	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005227/31_Hats_X_El_Mago_De_East_L.A._45.jpg
31 Forever Black NY 31 Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005227/31_Forever_Black_NY_31_Hats_45.jpg
Westcol y Kris R	30	https://res.cloudinary.com/wstd8asg/image/upload/v1789005226/Westcol_y_Kris_R_30.jpg
10 Aniversario Azul Dandy Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005224/10_Aniversario_Azul_Dandy_Hats_45.jpg
Westcol y Kris R	30	https://res.cloudinary.com/wstd8asg/image/upload/v1789005224/Westcol_y_Kris_R_30_2.jpg
Westcol brillos	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005223/Westcol_brillos_25.jpg
Westcol y Blessd	22	https://res.cloudinary.com/wstd8asg/image/upload/v1789005223/Westcol_y_Blessd_22.jpg
W	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005223/W_24.jpg
Virgen Maria	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005223/Virgen_Maria_25_3.jpg
Virgen Maria	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005220/Virgen_Maria_25.jpg
Virgen Maria	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005220/Virgen_Maria_25_2.jpg
Virgen Maria	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005220/Virgen_Maria_24_000.jpg
Virgen Maria	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005219/Virgen_Maria_24_4.jpg
Virgen Maria	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005219/Virgen_Maria_24.jpg
Virgen Maria	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005219/Virgen_Maria_24_4.jpg
Virgen Maria	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005219/Virgen_Maria_24.jpg
Virgen Maria	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005219/Virgen_Maria_24_3.jpg
Tito Doble P Rosones JC Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005219/Tito_Doble_P_Rosones_JC_Hats_45.jpg
Virgen Maria	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005216/Virgen_Maria_24_2.jpg
T-Star 31 Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005215/T-Star_31_Hats_45.jpg
Ultima cena	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005216/Ultima_cena_24.jpg
Trebol	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005215/Trebol_25.jpg
Trebol	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005215/Trebol_24.jpg
Tito Doble P	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005215/Tito_Doble_P_25.jpg
Thirty One Hats Shadow Edition	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005215/Thirty_One_Hats_Shadow_Edition_45.jpg
Thirty One Hats Shadow Edition	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005215/Thirty_One_Hats_Shadow_Edition_45.jpg
Supreme	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005211/Supreme_19.jpg
Supreme	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005211/Supreme_19_3.jpg
Supreme	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005210/Supreme_19_5.jpg
Supreme	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005208/Supreme_19_4.jpg
Supreme	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005208/Supreme_19_2.jpg
Sunset Blvd Dandy Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005208/Sunset_Blvd_Dandy_Hats_45.jpg
Sox	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005207/Sox_24.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005207/Sox_19.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005207/Sox_19_14.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005204/Sox_19_16.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005203/Sox_19_15.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005203/Sox_19_13.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005202/Sox_19_8.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005202/Sox_19_11.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005202/Sox_19_10.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005199/Sox_19_9.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005198/Sox_19_6.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005198/Sox_19_5.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005198/Sox_19_4.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005198/Sox_19_2.jpg
Sox	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005198/Sox_19_3.jpg
Son of God	30	https://res.cloudinary.com/wstd8asg/image/upload/v1789005195/Son_of_God_30.jpg
Skull FES Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005194/Skull_FES_Barbas_Hats_45.jpg
Skate or Die	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005193/Skate_or_Die_23.jpg
Santa muerte	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005193/Santa_muerte_26.jpg
Santa muerte	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005193/Santa_muerte_24.jpg
Santa Muerte	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005193/Santa_Muerte_24_3.jpg
Santa Muerte	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005193/Santa_Muerte_23.jpg
Santa muerte	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005189/Santa_muerte_24_2.jpg
San Judas	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005189/San_Judas_24.jpg
San Juda Tadeo	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005189/San_Juda_Tadeo_25.jpg
San juda	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005189/San_juda_24_3.jpg
San juda	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005189/San_juda_24_3.jpg
San Diego Stars	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005185/San_Diego_Stars_24.jpg
Sad Boyz Dandy Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005185/Sad_Boyz_Dandy_Hats_45.jpg
Ruleta	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005185/Ruleta_25.jpg
Sad Boyz	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005185/Sad_Boyz_24.jpg
Rude Awakenings x Dandy Hats Cristo	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005184/Rude_Awakenings_x_Dandy_Hats_Cristo_45.jpg
Rude Awakenings	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005183/Rude_Awakenings_26.jpg
Rude Awakenings La ultima cena	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005182/Rude_Awakenings_La_ultima_cena_45.jpg
Rude Awakenings Jesus Christ White Crystals	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005180/Rude_Awakenings_Jesus_Christ_White_Crystals_45.jpg
Rude Awakenings	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005178/Rude_Awakenings_26_3.jpg
Rude Awakenings Triple Black Crystals	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005178/Rude_Awakenings_Triple_Black_Crystals_45.jpg
Rude Awakenings	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005178/Rude_Awakenings_26_2.jpg
Rico o Muerto	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005178/Rico_o_Muerto_24_3.jpg
Rico o muerto	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005177/Rico_o_muerto_24.jpg
Rico o Muerto	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005177/Rico_o_Muerto_24_2.jpg
Rich Boyz	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005177/Rich_Boyz_26.jpg
Rebel Rosa	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005175/Rebel_Rosa_27.jpg
Rebel Roja	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005173/Rebel_Roja_27.jpg
Raides	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005173/Raides_19.jpg
Rays	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005173/Rays_19.jpg
Raiders	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005173/Raiders_19.jpg
Raiders	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005172/Raiders_19_2.jpg
PR	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005172/PR_19.jpg
Porta gorras azul	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005169/Porta_gorras_azul_25.jpg
Poker	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005168/Poker_26_2.jpg
Porta gorra verde	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005168/Porta_gorra_verde_25.jpg
Poker	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005168/Poker_26.jpg
Porta gorra Rojo	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005168/Porta_gorra_Rojo_25.jpg
Poker	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005168/Poker_25.jpg
Poker	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005167/Poker_24.jpg
Platinum Snowflake Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005165/Platinum_Snowflake_Barbas_Hats_45.jpg
Panterera Rosa	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005164/Panterera_Rosa_24.jpg
Pantera Rosa	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005164/Pantera_Rosa_26.jpg
NY NY NY Colores	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005164/NY_NY_NY_Colores_25.jpg
Oveja Negra Negra	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005164/Oveja_Negra_Negra_25.jpg
Oveja Negra Blanca	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005162/Oveja_Negra_Blanca_25.jpg
NY Skeleton Dandy hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005161/NY_Skeleton_Dandy_hats_45.jpg
NY NY NY X LALALA roja	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005158/NY_NY_NY_X_LALALA_roja_25.jpg
NY NY NY negra y blanca	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005158/NY_NY_NY_negra_y_blanca_25.jpg
NY NY NY	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005158/NY_NY_NY_25.jpg
NY Bride Rude Awakenings	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005158/NY_Bride_Rude_Awakenings_45.jpg
NY	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005158/NY_24.jpg
NY mago	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005158/NY_mago_23.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005157/NY_19_35.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005157/NY_19.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005153/NY_19_36.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005153/NY_19_34.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005153/NY_19_33.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005153/NY_19_32.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005152/NY_19_30.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005152/NY_19_28.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005152/NY_19_31.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005152/NY_19_27.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005152/NY_19_29.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005148/NY_19_25.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005148/NY_19_24.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005148/NY_19_23.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005148/NY_19_22.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005147/NY_19_20.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005147/NY_19_21.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005144/NY_19_19.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005144/NY_19_18.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005144/NY_19_15.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005143/NY_19_17.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005143/NY_19_16.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005143/NY_19_14.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005140/NY_19_13.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005139/NY_19_8.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005139/NY_19_11.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005139/NY_19_12.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005139/NY_19_9.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005139/NY_19_10.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005139/NY_19_7.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005134/NY_19_5.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005134/NY_19_2.jpg
New York	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005134/New_York_24_2.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005134/NY_19_6.jpg
NY	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005134/NY_19_4.jpg
New York	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005134/New_York_24.jpg
Monopolio Brillos negros	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005130/Monopolio_Brillos_negros_24.jpg
MuraTravis	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005130/MuraTravis_24.jpg
MONEY	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005129/MONEY_24.jpg
MuraTravis	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005129/MuraTravis_24_2.jpg
MONEY	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005129/MONEY_24_2.jpg
Mexicaps	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005127/Mexicaps_19.jpg
Mexcaps	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005124/Mexcaps_19.jpg
Mc Pato verde	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005124/Mc_Pato_verde_24.jpg
MC pato	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005124/MC_pato_24.jpg
LALALA ultima cena	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005124/LALALA_ultima_cena_25_2.jpg
MAGO	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005124/MAGO_24.jpg
LALALA X NY NY NY Negra	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005124/LALALA_X_NY_NY_NY_Negra_25.jpg
LALALA ultima cena	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005124/LALALA_ultima_cena_25.jpg
LALALA Stars rosa	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005120/LALALA_Stars_rosa_26.jpg
LALALA Stars	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005119/LALALA_Stars_24.jpg
LALALA Stars	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005119/LALALA_Stars_24_2.jpg
LALALA dorada	26	https://res.cloudinary.com/wstd8asg/image/upload/v1789005119/LALALA_dorada_26.jpg
LA ultima cena	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005119/LA_ultima_cena_25.jpg
LA Sad Boyz	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005119/LA_Sad_Boyz_24.jpg
LA Sad Boyz	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005119/LA_Sad_Boyz_24_2.jpg
LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005119/LA_24_3.jpg
LA cruz	23	https://res.cloudinary.com/wstd8asg/image/upload/v1789005115/LA_cruz_23.jpg
LA OVEJA NEGRA negra	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005115/LA_OVEJA_NEGRA_negra_24.jpg
LA OVEJA NEGRA cafe	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005114/LA_OVEJA_NEGRA_cafe_24.jpg
LA OVEJA NEGRA blanca	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005115/LA_OVEJA_NEGRA_blanca_24.jpg
LA Blanca Brillos	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005114/LA_Blanca_Brillos_24.jpg
LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005114/LA_24_000.jpg
LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005114/LA_24.jpg
LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005111/LA_24_4.jpg
LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005111/LA_24_004.jpg
LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005110/LA_24_003.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005110/LA_19.jpg
LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005110/LA_24_2.jpg
LA	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005110/LA_24_002.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005106/LA_19_21.jpg
La	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005106/La_19_24.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005106/LA_19_23.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005106/LA_19_22.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005106/LA_19_20.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005106/LA_19_19.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005101/LA_19_16.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005101/LA_19_18.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005101/LA_19_17.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005101/LA_19_14.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005101/LA_19_15.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005101/LA_19_13.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005100/LA_19_11.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005100/LA_19_12.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005097/LA_19_10.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005096/LA_19_9.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005096/LA_19_7.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005096/LA_19_8.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005096/LA_19_6.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005095/LA_19_5.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005095/LA_19_3.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005095/LA_19_4.jpg
LA	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005091/LA_19_2.jpg
Koridosu Tumbadosu Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005091/Koridosu_Tumbadosu_Barbas_Hats_45.jpg
Jewelry District 31 Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005091/Jewelry_District_31_Hats_45.jpg
Holy Ghost Rude Awakenings	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005091/Holy_Ghost_Rude_Awakenings_45.jpg
HHH Stars	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005091/HHH_Stars_27.jpg
Gorra NY Mago	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005091/Gorra_NY_Mago_24.jpg
Éxodo	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005091/%C3%89xodo_27_3.jpg
Éxodo	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005087/%C3%89xodo_27.jpg
Florida	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005087/Florida_19.jpg
H Stars	19	https://res.cloudinary.com/wstd8asg/image/upload/v1789005087/H_Stars_19.jpg
Éxodo	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005087/%C3%89xodo_27_2.jpg
El Mago Dandy Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005086/El_Mago_Dandy_Hats_45.jpg
Eclipse Barbas Hats x Aleman	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005082/Eclipse_Barbas_Hats_x_Aleman_45.jpg
El Mago 31 hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005082/El_Mago_31_hats_45.jpg
El Cuerno Mexicaps	28	https://res.cloudinary.com/wstd8asg/image/upload/v1789005082/El_Cuerno_Mexicaps_28.jpg
El lobo	27	https://res.cloudinary.com/wstd8asg/image/upload/v1789005082/El_lobo_27.jpg
Dark Nebula Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005082/Dark_Nebula_Barbas_Hats_45.jpg
Death	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005081/Death_25.jpg
Did It Again Dandy Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005082/Did_It_Again_Dandy_Hats_45.jpg
El Búho Barbas Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005081/El_B%C3%BAho_Barbas_Hats_45.jpg
Dandy Hats Purp	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Dandy_Hats_Purp_45.jpg
Dandy Hats x Lost Hills	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005077/Dandy_Hats_x_Lost_Hills_45.jpg
Dandy Hats x Lil Baby CBFW	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005077/Dandy_Hats_x_Lil_Baby_CBFW_45.jpg
Dandy Hats x Fuerza Regida Crystals	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005077/Dandy_Hats_x_Fuerza_Regida_Crystals_45.jpg
Dandy Hats Los Angeles	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Dandy_Hats_Los_Angeles_45.jpg
Dandy Hats Edición Especial 10 Aniversario	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Dandy_Hats_Edici%C3%B3n_Especial_10_Aniversario_45.jpg
Dandy Hats 10th Anniversary Black	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Dandy_Hats_10th_Anniversary_Black_45.jpg
Dandy Hats Anniversary - Brown	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Dandy_Hats_Anniversary_-_Brown_45.jpg
Dandy Did This Dandy Hats	45	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Dandy_Did_This_Dandy_Hats_45.jpg
Cuerno de chivo	24	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Cuerno_de_chivo_24.jpg
Cuerno de Chivo	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Cuerno_de_Chivo_25.jpg
Dandy Hats	25	https://res.cloudinary.com/wstd8asg/image/upload/v1789005076/Dandy_Hats_25.jpg`;

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
