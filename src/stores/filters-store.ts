import { makeAutoObservable } from "mobx";

class FiltersStore {
    name = '';
    status = 'All';
    gender = 'All'

    constructor() {
        makeAutoObservable(this);
    }

    setName(name: string) {
        this.name = name;
    }

    setStatus(status: string) {
        this.status = status;
    }

    setGender(gender: string) {
        this.gender = gender;
    }
}

export default new FiltersStore();