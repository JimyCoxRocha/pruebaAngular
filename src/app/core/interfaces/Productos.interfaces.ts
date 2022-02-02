export interface ApiProductos {
    estado: boolean,
    productos: Productos[]
}

export interface Productos {
    id_producto: number,
    tipo: number,
    cod_principal: number,
    nombre: string,
    descripcion: string,
    precio: string,
    stock: number,
    imagenes: string[],
    isSelected: boolean;
}