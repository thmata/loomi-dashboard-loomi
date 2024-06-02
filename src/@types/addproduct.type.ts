export interface FormData {
    name: string;
    id: string;
    code: string;
    seller: string;
    deliveryTime: string;
    subtitle: string;
    information: string;
    care: string;
    codigo: string;
    cor: string;
    tamanho1: string;
    tamanho2: string;
    tamanho3: string;
    categories: { [key: string]: string[] };
    tags: { [key: string]: string[] };
}