import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { PruebaModel } from '../model/prueba.model';
import { map, delay } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

 


  constructor( private firestore: AngularFirestore  ) { }


  createUser(value){
  return this.firestore.collection('datosEncuesta').add({
    
    zonas0:value.zonas0,
   ocupacion1:value.ocupacion1 ,
   gener2:value.gener2 ,
   edad3:value.edad3 ,
   ecivil4:value.ecivil4 ,
   ecivil41:value.ecivil41 ,
   dondeTrabaja5: value.dondeTrabaja5 ,
   areasTrabajoCovid6: value.areasTrabajoCovid6 ,
   areasTrabajoCovid611: value.areasTrabajoCovid611 ,
   areasTrabajoCovid612: value.areasTrabajoCovid612 ,
   areasTrabajoCovid613: value.areasTrabajoCovid613 ,
   areasTrabajoCovid614: value.areasTrabajoCovid614 ,
   areasTrabajoCovid615: value.areasTrabajoCovid615 ,
   areasTrabajoCovid616: value.areasTrabajoCovid616 ,
   areasTrabajoCovid617: value.areasTrabajoCovid617 ,
   areasTrabajoCovid618: value.areasTrabajoCovid618 ,
   atiendeCovid7: value.atiendeCovid7 ,
   familiarCovid8: value.familiarCovid8 ,
   amigoCovid9 :value.amigoCovid9 ,
   vecinoCovid10: value.vecinoCovid10 ,
   compaCovid11: value.compaCovid11 ,
   conviveCovid12: value.conviveCovid12 ,
   youCovid1211: value.youCovid121,
   homeCovid122: value.homeCovid122,
   difSueno13: value.difSueno13 ,
   difPerSueno14: value.difPerSueno14 ,
   despTemprano15: value.despTemprano15 ,
   satisSueno16: value.satisSueno16 ,
   suenoInterfiere17: value.suenoInterfiere17 ,
   demasCuenta18: value.demasCuenta18 ,
   preocupadoSueno19: value.preocupadoSueno19 ,
   sentidoNervioso20: value.sentidoNervioso20 ,
   dejarPreocuparse21: value.dejarPreocuparse21 ,
   preocupaExceso22: value.preocupaExceso22 ,
   dificultadRelax23: value.dificultadRelax23 ,
   intranquiloQuieto24: value.intranquiloQuieto24 ,
   irritadoFacil25: value.irritadoFacil25 ,
   miedoTerrible26: value.miedoTerrible26 ,
   pocoInteres27:value.pocoInteres27 ,
   decaido28: value.decaido28 ,
   dificultadDormido29: value.dificultadDormido29 ,
   pocaEnergia30: value.pocaEnergia30 ,
   apetito31: value.apetito31 ,
   fracaso32: value.fracaso32 ,
   dificilConcentrar33: value.dificilConcentrar33 ,
   movidoInquieto34: value.movidoInquieto34 ,
   mejorMuerto35: value.mejorMuerto35 ,
   qdificultad36: value.qdificultad36 ,
   sentiAntes37: value.sentiAntes37 ,
   problemasDormido38: value.problemasDormido38 ,
   pensarSuceso39: value.pensarSuceso39 ,
   enojado40: value.enojado40 ,
   noAlterarme41: value.noAlterarme41 ,
   pensarEnEllo42: value.pensarEnEllo42 ,
   sentiaComo43: value.sentiaComo43 ,
   matenerLejos44: value.matenerLejos44 ,
   imagenSuceso45:value.imagenSuceso45 ,
   sobresaltar46: value.sobresaltar46 ,
   noPensar47: value.noPensar47 ,
   darCuenta48: value.darCuenta48 ,
   misSentimientos49: value.misSentimientos49 ,
   meEncontraba50: value.meEncontraba50 ,
   problemaConciliar51: value.problemaConciliar51 ,
   meInvaden52: value.meInvaden52 ,
   apartarlo53: value.apartarlo53 ,
  problemaConcentracion54: value.problemaConcentracion54 ,
   cosasRecordaban55: value.cosasRecordaban55 ,
   sentiaVigilante56: value.sentiaVigilante56 ,
   sonabaCon57: value.sonabaCon57 ,
   noHablar58: value.noHablar58 ,
   apoyoPsico59: value.apoyoPsico59 ,
   matPsico601: value.matPsico601 ,
   recurPsico602: value.recurPsico602 ,
   interPsico603: value.interPsico603 ,
   terapia604: value.terapia604 ,
   epiApropiado61: value.epiApropiado61 ,
   noPreparado62:value. noPreparado62,
   faltaInfo63: value.faltaInfo63 ,
   cambipProtocolo64: value.cambipProtocolo64 ,
   preocupacion65: value.preocupacion65 ,
   contagiar66: value.contagiar66 ,
   contagiarme67: value.contagiarme67 ,
   excesoTrabajo68: value.excesoTrabajo68 ,
   acomodarse69: value.acomodarse69 ,
   dificultadEpi70: value.dificultadEpi70 ,
   aislamiento71: value.aislamiento71 ,
   terapeutica72: value.terapeutica72 ,
   brote73: value.brote73,
   tratamientoPsi74: value.tratamientoPsi74,
   consumo75: value.consumo75,
   tranquilizante76: value.tranquilizante76,
   antidepresivo77: value.antidepresivo77,
   estresante78: value.estresante78,
   estresante79: value.estresante79,
   muerteCovid80: value.muerteCovid80,
   enfermarCovid81: value.enfermarCovid81,
   morirCovid82: value.morirCovid82,
   contagioQuerida83: value.contagioQuerida83,
   higiene84: value.higiene84,
  estrategia851: value.estrategia851,
   estrategia852: value.estrategia852,
   estrategia853: value.estrategia853,
   estrategia854: value.estrategia854,
   estrategia855: value.estrategia855,
   estrategia856: value.estrategia856,
   estrategia857: value.estrategia857,




   
  });
}

  





 


  

  

}
