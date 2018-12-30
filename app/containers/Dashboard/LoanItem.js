import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import _has from 'lodash/has';
import Colors from 'utils/colors';
import ItemLabel from 'components/ItemLabel';

const styles = {
  card: {
    height: 280,
  },
  btn: {
    color: Colors.green,
    fontWeight: 600,
    border: `1px solid ${Colors.green}`,
  },
};

function LoanItem(props) {
  const { classes, value, id, repay } = props;
  const isApprove = _has(value, 'status') && value.status === 'Approved';
  const amountPaid = _has(value, 'amountPaid') ? value.amountPaid : 0;
  return (
    <Card className={classes.card} square>
      <CardContent>
        <ItemLabel label="Name" value={value.businessInfo.name} />
        <ItemLabel label="Amount" value={value.amount} type="amount" />
        <ItemLabel label="Terms" value={`${value.term} week(s)`} />
        <ItemLabel
          label="Weekly Repayment"
          value={value.paymentInfo.weeklyPayment}
          type="amount"
        />
        <ItemLabel
          label="Total Payment"
          value={value.paymentInfo.totalPayment}
          type="amount"
        />
        <ItemLabel label="Amount Paid" value={amountPaid} type="amount" />
        <ItemLabel label="Bank" value={value.bankMetadata.institution.name} />
        <ItemLabel label="Status" value={isApprove ? 'Approved' : 'Pending'} />
      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={() => repay(value, id)}
          className={classes.btn}
          disabled={
            !isApprove ||
            parseFloat(value.amountPaid, 10) >=
              parseFloat(value.paymentInfo.totalPayment, 10)
          }
        >
          Repay
        </Button>
      </CardActions>
    </Card>
  );
}

LoanItem.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.object,
  id: PropTypes.string,
  repay: PropTypes.func,
};

export default withStyles(styles)(LoanItem);
