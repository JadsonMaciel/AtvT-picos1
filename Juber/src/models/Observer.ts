import { Corrida } from "./Corrida";

export interface Observer {
    update(corrida: Corrida): void;
}

export interface Subject {
    addObserver(observer: Observer): void; 
    removeObserver(observer: Observer): void; 
    notifyObservers(corrida:Corrida): void;
}