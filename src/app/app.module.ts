//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {RadioButtonModule} from 'primeng/radiobutton';


//ROTAS
import { routing } from './app.routing';
//SERVIÇO
import { AuthService } from './services/auth.service';
import { UsuarioService } from './services/usuario.service';
import { PedidosAdocaoService } from './services/pedidos-adocao.service';
//COMPONENTES
import { FeedModule } from './feed/feed.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component'
import { BancoFirebaseConfig } from '../environments/BancoFirebaseConfig';
import { FeedComponent } from './feed/feed.component';
import { ListarAnimaisComponent } from './feed/listar-animais/listar-animais.component';
import { MeusAnimaisEditComponent } from './feed/meus-animais-edit/meus-animais-edit.component';
import { CometariosService } from './services/cometarios.service';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    FeedComponent,
    ListarAnimaisComponent,
    MeusAnimaisEditComponent,
  ],
  imports: [
    TabMenuModule,
    BrowserModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    routing,
    DialogModule,
    AngularFireModule.initializeApp(BancoFirebaseConfig, 'angular-auth-firebase'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FeedModule,
    ContextMenuModule,
    DataViewModule,
    ScrollPanelModule,
    RadioButtonModule,
  ],
  providers: [UsuarioService, AuthService, FormBuilder, PedidosAdocaoService, CometariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }


