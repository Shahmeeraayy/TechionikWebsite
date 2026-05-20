export interface Services {
    id: number | string;
    icon: string;
    title: string;
    description: string;
    state: boolean;
    lists: string[];
    href: string;
}

export interface ServiceData {
    title?: string;
    middleTitle?: string;
    lastTitle?: string;
    description?: string;
    buttonLabel?: string;
    buttonUrl?: string;
    slider:{
        service1: Services[];
        service2: Services[];
        service3: Services[];
        service4: Services[];
        service5: Services[];
        service6: Services[];
    }
}