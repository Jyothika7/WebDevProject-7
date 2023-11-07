const express=require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.json())
app.get('/',(req,res)=>{
  res.render('reg')
})
app.get('/login',(req,res)=>{
  res.render('login')
})
app.get('/poll',(req,res)=>{
  res.render('poll')
})
app.listen(5000,()=>{
  console.log('sever running on 5000')
})


