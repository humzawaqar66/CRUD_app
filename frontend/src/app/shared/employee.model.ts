export interface Employee 
{
    Id:number,
    Name:string,
    lastName: string,
    Email: string,
    Age: number,
    Doj: any;
    Gender: string,
    IsMarried: boolean;
    IsActive: number;
    DesignationId: number,
    Designation: string,
 }
 export interface Designation {
    Id:number
    Designation:string
}
