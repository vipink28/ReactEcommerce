import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, FormSpy } from 'react-final-form'
import { fetchCategories, updateFormState } from '../../shared/Actions'
import { getFormState } from '../../shared/Reducers';
import axios from "axios"
class Categories extends Component {
    
    componentDidMount(){
        this.props.fetchCategories();
    }
    componentDidUpdate(prevProps, prevState){        
        if(prevProps.categories.id !== this.props.categories.id){
            this.props.fetchCategories();
        }        
    }

    onSubmit = async values => {       
        axios.post('http://localhost:5000/categories', values);
        // this.props.updateFormState();
        // console.log(this.props.catFromRedux);
    }

    
    render() {
            
        return (
            <>
                <div className="col-lg-6">
                    <h2>Add Category</h2>

                    <Form
        onSubmit={this.onSubmit}
        initialValues={{ categoryName: "" }}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
          <FormSpy onChange={state => updateFormState(form, state)} />
            <div>
              <label className='form-label'>First Name</label>
              <Field
                name="categoryName"
                component="input"
                type="text"
                placeholder="Category Name"
                className="form-control"
              />
            </div>          
            <div className="mt-3">
              <button className='btn btn-primary me-3' type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
                className="btn btn-light"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </Form>



                </div>
               
                <div className="col-lg-6">
                    <h2>All Categories</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {                            
                            this.props.categories.map((cat)=>{
                                return (
                                    <tr key={cat.id}>
                                <td>{cat.categoryName}</td>
                                <td>
                                <button className='btn btn-info'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                                )
                            })
                        }                            
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        categories: state.allCategories,
        // catFromRedux: getFormState(state.addCategory, ownProps.form)
    }
}

export default connect(mapStateToProps, {fetchCategories, updateFormState})(Categories);