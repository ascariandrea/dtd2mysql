import Record from "../../../feed/record/Record";
import DateField from "../../../feed/field/DateField";
import SingleRecordFile from "../../../feed/file/SingleRecordFile";
import {TextField} from "../../../src/feed/field/TextField";
import {IntField} from "../../../src/feed/field/IntField";

const ticketValidity = new Record(
  "ticket_validity",
  ["validity_code", "end_date"],
  {
    "validity_code": new TextField(0, 2),
    "end_date": new DateField(2),
    "start_date": new DateField(10),
    "description": new TextField(18, 20),
    "out_days": new IntField(38, 2),
    "out_months": new IntField(40, 2),
    "ret_days": new IntField(42, 2),
    "ret_months": new IntField(44, 2),
    "ret_after_days": new IntField(46, 2),
    "ret_after_months": new IntField(48, 2),
    "ret_after_day": new TextField(50, 2, true),
    "break_out": new TextField(52, 1),
    "break_in": new TextField(53, 1),
    "out_description": new TextField(54, 14),
    "rtn_description": new TextField(68, 14)
  }
);

const TVL = new SingleRecordFile(ticketValidity);

export default TVL;