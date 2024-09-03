import { useRouter } from 'next/navigation';
import { NextResponse , NextRequest} from 'next/server';
import {connect} from '@/dbConfig/dbConfig'
import Card from '@/models/card.model'
import category, { Category } from '@/models/category.model'
connect()


const router = useRouter ()

// const router = useRouter ()
export async function POST( request: NextRequest){
    try {
       const reqBody =  await request.json()
      
// validation 
console.log(reqBody);
  
const categoryList = await Category.findOne({name})

if(!categoryList) {
    return NextResponse.json({ error: 'Category not found' }, { status: 400 });
}

return NextResponse.json({ success: true, categoryList }, { status: 200 });

}  
   catch (error:any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
       
    }
   
}
   














