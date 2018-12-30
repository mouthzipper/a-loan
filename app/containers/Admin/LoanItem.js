import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import _has from 'lodash/has';
import Colors from 'utils/colors';
import ItemLabel from './ItemLabel';

const styles = {
  card: {
    height: 230,
  },
  btn: {
    color: Colors.green,
    fontWeight: 600,
    border: `1px solid ${Colors.green}`,
  },
};

function LoanItem(props) {
  const { classes, value, id, approve } = props;
  const hideApproveButton =
    _has(value, 'status') && value.status === 'Approved';
  return (
    <Card className={classes.card} square>
      <CardContent>
        <ItemLabel label="Name" value={value.businessInfo.name} />
        <ItemLabel label="Amount" value={`$ ${value.amount.toFixed(2)}`} />
        <ItemLabel label="Terms" value={`${value.term} week(s)`} />
        <ItemLabel
          label="Weekly Repayment"
          value={`$ ${value.paymentInfo.weeklyPayment}`}
        />
        <ItemLabel
          label="Total Payment"
          value={`$ ${value.paymentInfo.totalPayment}`}
        />
        <ItemLabel label="Bank" value={value.bankMetadata.institution.name} />
        {hideApproveButton && <ItemLabel label="Status" value="Approved" />}
      </CardContent>
      {!hideApproveButton && (
        <CardActions>
          <Button
            size="small"
            onClick={() => approve(id)}
            className={classes.btn}
          >
            Approve
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

LoanItem.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.object,
  id: PropTypes.string,
  approve: PropTypes.func,
};

export default withStyles(styles)(LoanItem);
