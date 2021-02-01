import React from 'react'

const FormTask = () => {
    return ( 
        <> 
            <div className="form_task_container">
                <form /*onSubmit={} */>
                    <input 
                        type="text" 
                        name="tarea"
                        placeholder="Agrega una tarea o edita una" 
                        className="input_task"  
                    />
                    <input 
                        type="submit" 
                        value="Guardar Tarea" 
                        className="btn btn_submit"/>
                </form>
            </div>
        </>
     );
}
 
export default FormTask;