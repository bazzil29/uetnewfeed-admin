import React from "react";
import './EventDetails.css'
import DateTimePicker from 'react-datetime-picker';
import {
    ModalBody,
    ModalFooter,
    ModalHeader,
    Modal,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    ListGroupItem,
    ListGroup, Badge, CardBody, Card,
    Collapse, Row, Col, CardHeader, CustomInput
} from "reactstrap";

export default class EventDetails extends React.Component {
    state = {
        info: {
            name: "ĐÂY LÀ TIÊU ĐỀ SỰ KIỆN",
            id: '16021629',
            email: 'oscar.ngo98@gmail.com',
            phone: '0971486734',
            context: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.",
            organization: 'NGÔ MINH PHƯƠNG',
            img: 'link img',
        },
        date: new Date(),
        collapse: false,
        students: ['a', 'b', 'c', 'd','f','g','h','i','j'],
        isStudentsOpen:false
    };
    addStudentSearch = (e) => {
        const tmp = e.target;
        const tmp1 = document.getElementById('select-major');
        const tmp2 = tmp1[tmp1.selectedIndex].value;
        const tmp3 = tmp[tmp.selectedIndex].value;
        console.log(tmp2);
        console.log(tmp3);
        if (tmp2 === 'rand') {
            const tmp5 = document.getElementById("select-class");
            tmp5.innerHTML = `
                                        <option value="class id" >Lớp</option>
                                    `;

        }
        else if (tmp2 === "FIT") {
            if (tmp3 === "rand") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="rand">Lớp</option>
                                    `;
            }
            else if (tmp3 === "k59") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K59CNTT1</option>
                                        <option value="class id">K59CNTT2</option>
                                        <option value="class id">K59CNTT3</option>
                                        <option value="class id">K59CNTT4</option>
                                        <option value="class id">K59CNTT5</option>
                                    `;

            } else if (tmp3 === "k60") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K60CNTT1</option>
                                        <option value="class id">K60CNTT2</option>
                                        <option value="class id">K60CNTT3</option>
                                        <option value="class id">K60CNTT4</option>
                                        <option value="class id">K60CNTT5</option>
                                    `;

            } else if (tmp3 === "k61") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K61CNTT1</option>
                                        <option value="class id">K61CNTT2</option>
                                        <option value="class id">K61CNTT3</option>
                                        <option value="class id">K61CNTT4</option>
                                        <option value="class id">K61CNTT5</option>
                                    `;

            } else if (tmp3 === "k62") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K62CNTT1</option>
                                        <option value="class id">K62CNTT2</option>
                                        <option value="class id">K62CNTT3</option>
                                        <option value="class id">K62CNTT4</option>
                                        <option value="class id">K562CNTT5</option>
                                    `;

            } else if (tmp3 === "k63") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K63CNTT1</option>
                                        <option value="class id">K63CNTT2</option>
                                        <option value="class id">K63CNTT3</option>
                                        <option value="class id">K63CNTT4</option>
                                        <option value="class id">63CNTT5</option>
                                    `;

            }

        }
        else if (tmp2 === 'FET') {
            if (tmp3 === "rand") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="rand">Lớp</option>
                                    `;
            }
            else if (tmp3 === "k59") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K59CNTT1</option>
                                        <option value="class id">K59CNTT2</option>
                                        <option value="class id">K59CNTT3</option>
                                        <option value="class id">K59CNTT4</option>
                                        <option value="class id">K59CNTT5</option>
                                    `;

            } else if (tmp3 === "k60") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K60CNTT1</option>
                                        <option value="class id">K60CNTT2</option>
                                        <option value="class id">K60CNTT3</option>
                                        <option value="class id">K60CNTT4</option>
                                        <option value="class id">K60CNTT5</option>
                                    `;

            } else if (tmp3 === "k61") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K61CNTT1</option>
                                        <option value="class id">K61CNTT2</option>
                                        <option value="class id">K61CNTT3</option>
                                        <option value="class id">K61CNTT4</option>
                                        <option value="class id">K61CNTT5</option>
                                    `;

            } else if (tmp3 === "k62") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K62CNTT1</option>
                                        <option value="class id">K62CNTT2</option>   
                                        <option value="class id">K62CNTT3</option>
                                        <option value="class id">K62CNTT4</option>
                                        <option value="class id">K562CNTT5</option>
                                    `;

            } else if (tmp3 === "k63") {
                const tmp5 = document.getElementById("select-class");
                tmp5.innerHTML = `
                                        <option value="class id" >K63CNTT1</option>
                                        <option value="class id">K63CNTT2</option>
                                        <option value="class id">K63CNTT3</option>
                                        <option value="class id">K63CNTT4</option>
                                        <option value="class id">63CNTT5</option>
                                    `;

            }

        }
    };

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }



    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    makeListStudent = () => {
        const tmp = this.state.students;
        return tmp.map((e, key) => {
            return <CardHeader>
                <Row>
                    <Col lg={'1'} md={'1'} sm={'1'} xs={'1'}>{e}</Col>
                    <Col lg={'6'} md={'6'} sm={'6'} xs={'6'}>{e}</Col>
                    <Col lg={'3'} md={'3'} sm={'3'} xs={'3'}>{e}</Col>
                    <Col lg={'2'} md={'2'} sm={'2'} xs={'2'}>
                        <div className="checkbox checkbox-primary">
                            <input id="checkbox" type="checkbox"/>
                        </div>

                    </Col>
                </Row>
            </CardHeader>
        })
    }

    onChange = date => this.setState({date});
    nameOnChange = (value) => {
        this.state.info.name = value;
        this.setState(this.state);

    };
    contextOnChange = (value) => {
        this.state.info.context = value;
        this.setState(this.state);
    }

    organzationOnChange = (value) => {
        this.state.info.organization = value;
        this.setState(this.state);
    };

    phoneOnChange(value) {
        this.state.info.phone = value;
        this.setState(this.state);
    }

    emailOnChange(value) {
        this.state.info.email = value;
        this.setState(this.state);
    }

    imgOnChange(value) {
        this.state.info.img = value;
        this.setState(this.state);
    }

    render() {

        const students = (this.state.isStudentsOpen)?this.makeListStudent():null;

        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Chỉnh sửa thông tin sự kiện</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Tiêu đề sự kiện:</Label>
                                <Input type="text" value={this.state.info.name} onChange={e => {
                                    this.nameOnChange(e.target.value);
                                }}/>
                                <Label>Mã sự kiện:</Label>
                                <Input type="text" placeholder={this.state.info.id} disabled/>
                                <Label>Nội dung sự kiện:</Label>
                                <textarea name="" className={'form-control'} value={this.state.info.context}
                                          cols="auto" rows="auto" id={'event-context'} onChange={e => {
                                    this.contextOnChange(e.target.value);
                                }}/>
                                <Label>Thời gian tổ chức</Label>
                                <br/>
                                <DateTimePicker className={'form-control'} id={'react-datetime-picker'}
                                                onChange={this.onChange}
                                                value={this.state.date}
                                />
                                <br/>
                                <Label>Đơn vị tổ chức:</Label>
                                <Input type="text" value={this.state.info.organization} onChange={e => {
                                    this.organzationOnChange(e.target.value);
                                }}/>
                                <Label>Số điện thoại:</Label>
                                <Input type="phone" value={this.state.info.phone} onChange={e => {
                                    this.phoneOnChange(e.target.value);
                                }}/>
                                <Label>E-mail:</Label>
                                <Input type="email" value={this.state.info.email} onChange={e => {
                                    this.emailOnChange(e.target.value);
                                }}/>
                                <Label>Ảnh bìa đính kèm:</Label>
                                <Input type="text" value={this.state.info.img} onChange={e => {
                                    this.imgOnChange(e.target.value);
                                }}/>
                                <Label>Sinh viên đã đăng ký:</Label>
                                <Input type="number" placeholder={this.state.info.point}/>
                                <Label>Sinh viên mặc định tham gia:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 1<i
                                        className="fas fa-minus-circle"
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 2<i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id Sinh viên 3 <i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between" onClick={this.toggle}>Thêm sinh
                                        viên<i
                                            className="fas fa-plus-circle " id={"student-icon"}/></ListGroupItem>
                                    <Collapse isOpen={this.state.collapse}>
                                        <Card id={'add-student-card'}>
                                            <CardBody>
                                                <Row>
                                                    <Col>
                                                        <Input type={'select'} name={"select"} id={'select-major'}>
                                                            <option value="rand">Khoa</option>
                                                            <option value="FIT">Công nghệ thông tin</option>
                                                            <option value="FET">Điện tử viễn thông</option>
                                                            <option value="FEMA">Cơ học kỹ thuật & Tự động hóa</option>
                                                            <option value="FFU">Công nghệ hàng không và vũ trụ</option>
                                                            <option value="FEPN">Vật lý kỹ thuật & Công nghệ Nano
                                                            </option>
                                                        </Input>
                                                    </Col>
                                                    <Col>
                                                        <Input type={'select'} name={"select"} id={'select-year'}
                                                               onChange={this.addStudentSearch}>
                                                            <option value="rand">Khóa</option>
                                                            <option value="k59">K59</option>
                                                            <option value="k60">K60</option>
                                                            <option value="k61">K61</option>
                                                            <option value="k62">K62</option>
                                                            <option value="k63">K63</option>
                                                        </Input>
                                                    </Col>
                                                    <Col>
                                                        <Input type={'select'} name={"select"} id={'select-class'}>
                                                            <option value="rand">Lớp</option>
                                                        </Input>
                                                    </Col>
                                                    <Col>
                                                        <Button onClick={()=>{
                                                            this.state.isStudentsOpen = !this.state.isStudentsOpen;
                                                            this.setState(this.state);
                                                        }}>Tìm</Button>
                                                    </Col>
                                                </Row>
                                                {students}
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </ListGroup>
                                <Label>Sinh viên đã tham gia:</Label>
                                <ListGroup>
                                    <ListGroupItem className="justify-content-between">id sinh vien 1 <i
                                        className="fas fa-minus-circle"
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id sinh vien 2 <i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">id sinh vien 3 <i
                                        className="fas fa-minus-circle "
                                        id={"student-icon"}/></ListGroupItem>
                                    <ListGroupItem className="justify-content-between">Thêm sinh viên<i
                                        className="fas fa-plus-circle " id={"student-icon"}/></ListGroupItem>
                                </ListGroup>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>Hoàn tất</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }


}

