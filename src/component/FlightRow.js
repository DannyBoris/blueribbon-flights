import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function FlightRow({ from, to, depart, arrival, price }) {
        return(
              <TableRow>
                      <TableCell>{from}</TableCell>
                      <TableCell>{to}</TableCell>
                      <TableCell>{depart}</TableCell>
                      <TableCell>{arrival}</TableCell>
                      <TableCell>{price}</TableCell>
              </TableRow>
            )
}
