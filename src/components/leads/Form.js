import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  FormText,
  Spinner,
} from "reactstrap";
import { createLead, updateLead } from "../../actions/leads";
import { connect } from "react-redux";

const url = "http://127.0.0.1:9000"

const FormComponent = (props) => {
  const [data, setData] = useState({ name: "", email: "", message: ""});
  const imageRef = useRef(null)
  const [selectImage,setSelectImage] = useState(null)
  const [displayImage,setDisplayImage] = useState("")

  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  console.log(selectImage)

  const handleImageChange = (e) => {
    if(e.target.files && e.target.files[0]){
      setSelectImage(e.target.files[0])

      const fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onload = () => {
        var dataURL = fileReader.result;
        setDisplayImage(dataURL)
      }
    }
  }


  useEffect(() => {
    if (Object.keys(props.selectedLead).length ) {
      console.log(" ----- Selected Lead ----- ",props.selectedLead)
      setDisplayImage(`${url}${props.selectedLead.image_path}`)
      setData(props.selectedLead);
    }
  }, [props]);





  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData()
    selectImage && formData.append("image",selectImage)
    formData.append("id",data?.id)
    formData.append("name",data.name)
    formData.append("email",data.email)
    formData.append("message",data.message)

    if (data.id) {
      console.log(" ----- Selected ----- ************ ",data)
      props.updateLead(data?.id,formData,() => {
        setData({ name: "", email: "", message: "" });
        setDisplayImage("")
        imageRef.current.value = ""
      });
    } else {
      props.createLead(formData,() => {
        setData({ name: "", email: "", message: "" });
        setDisplayImage("")
        imageRef.current.value = ""
      });
      
    }
    
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Lead</CardTitle>
        <hr />
        {
          props.isLoading ? (
            <Spinner />
          ):(
            <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="John Deo"
                name="name"
                value={data?.name || ""}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Image</Label>
              {
                displayImage ? (
                  <div className="d-flex justify-content-between">
                      <img src={displayImage} alt={data?.name} width="64px" height="64px" style={{objectFit:"contain"}} />
                      <div className="d-flex align-items-center">
                        <Button color="danger" outline size="sm" style={{height:"38px"}} onClick={() => setDisplayImage("")}>Remove</Button>
                      </div>
                  </div>
                ):(
                  <div className="d-flex justify-content-between">
                    No Image Selected
                    <div className="d-flex align-items-center">
                        <Button color="primary" outline size="sm" style={{height:"38px"}} onClick={() => document.getElementById("img-upload").click()}>Upload</Button>
                    </div>
                  </div>
                )}
                <Input 
                    id="img-upload" 
                    name="image" 
                    type="file" 
                    className="d-none"
                    accept="image/jpeg, image/png, image/svg" 
                    ref={imageRef} 
                    onChange={handleImageChange} 
                />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="john@gmail.com"
                name="email"
                value={data?.email || ""}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <Input
                type="text"
                placeholder="message..."
                name="message"
                value={data?.message || ""}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" outline>
                Save
              </Button>
            </FormGroup>
          </Form>
          )
        }
       
      </CardBody>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedLead: state.leads.selectedLead,
    isLoading:state.leads.isLoading
  };
};

export default connect(mapStateToProps, { createLead, updateLead })(
  FormComponent
);
