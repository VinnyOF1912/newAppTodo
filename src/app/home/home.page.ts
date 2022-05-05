import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  export class HomePage {

  tarefas: any[] = [];

  constructor(private alertCrtl: AlertController, private toastCtrl: ToastController) {}

  async showAdd() {
    const alert = await this.alertCrtl.create({
      cssClass: 'my-custom-class',
      header: 'O que você deseja fazer?',
      inputs: [
        {
          name: 'tarefa1',
          type: 'text',
          placeholder: 'Digite o que deseja fazer.',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado com sucesso');
          },
        },
        {
          text: 'Adicionar',
          handler: (from) => {
            this.adicionaTarefa(from.tarefa1);
          },
        },
      ],

    })
    await alert.present();
  }
  async adicionaTarefa(novaTarefa: string) {
    if (novaTarefa.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, digite a tarefa!',
        duration: 2000,
        position: 'top',
      })

      toast.present();
      return;

      }
      const tarefa = { nome:novaTarefa, realizada: false};
      this.tarefas.push(tarefa);
    }
  }

  

  

