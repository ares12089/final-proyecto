<template>

<nav class="navbar navbar-expand navbar-light bg-light">
    <div class="nav navbar-nav">
        <router-link to="/crear" class="nav-link">Crear</router-link>
        |
        <router-link to="/listar" class="nav-link">Listar</router-link>
        |
        <router-link to="/" class="nav-link">Cerrar sesion</router-link>
    </div>
</nav>
<br><br>


   <div class="container">


        <div class="card">
            <div class="card-header">
                Empleados
            </div>
            <div class="card-body">

                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.id">
                            <td> {{empleado.id}} </td>
                            <td> {{ empleado.nombre }} </td>
                            <td> {{ empleado.correo }} </td>
                            <th>



                                    <div class="btn-group" role="group" aria-label="">
                                        <router-link :to="{name:'EditarSection',params:{id:empleado.id}}" class="btn btn-info">Editar</router-link>

                                        <button type="button" v-on:click="borrarEmpleado(empleado.id)" class="btn btn-danger">Borrar</button>
                                    </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

    </div>
</template>

<script>
export default {
        data(){
           return{
                empleados:[]
           }     
        },


    created:function(){

        this.consultarEmpleados();

    },
    methods:{
        //
        consultarEmpleados(){

            fetch('http://localhost/empleados/')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{

                console.log(datosRespuesta)
                this.empleados=[]
                if(typeof datosRespuesta[0].success === 'undefined')
                {
                    this.empleados=datosRespuesta;
                }
            })
            .catch(console.log)
        },
        borrarEmpleado(id){
            console.log(id);
            fetch('http://localhost/empleados/?borrar='+id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{

                console.log(datosRespuesta)
                window.location.href="listar"
            })
            .catch(console.log)
        }
    }



}
</script>