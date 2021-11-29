import './FoodDetails.css'
import applePng from '../assets/images/apple.png'
const FoodDetails = () => {
    return (    
    <section className="u-clearfix u-section-1" id="sec-1625">
    <div className="u-clearfix u-sheet u-sheet-1">
      <blockquote className="u-border-custom-color-1 u-text u-text-default u-text-1">
        <span style={{fontSize: 24}}>Food Item - Apple&nbsp;</span>
      </blockquote>
      <div className="u-table u-table-responsive u-table-1">
        <table className="u-table-entity">
          <colgroup>
            <col width="33.3%"/>
            <col width="33.3%"/>
            <col width="33.400000000000006%"/>
          </colgroup>
          <thead className="u-custom-color-1 u-table-header u-table-header-1">
            <tr style={{height: 44}}>
              <th className="u-border-1 u-border-palette-4-base u-table-cell">Serving for 1&nbsp;</th>
              <th className="u-border-1 u-border-custom-color-1 u-table-cell">300Gm</th>
              <th className="u-border-1 u-border-palette-4-base u-table-cell">Percent Daily value</th>
            </tr>
          </thead>
          <tbody className="u-table-body">
            <tr style={{height: 44}}>
              <td className="u-border-1 u-border-grey-30 u-first-column u-grey-5 u-table-cell u-table-cell-4">calories</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell">256</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell"></td>
            </tr>
            <tr style={{height: 44}}>
              <td className="u-border-1 u-border-grey-30 u-first-column u-grey-5 u-table-cell u-table-cell-7">Calories From Fat</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell">12</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell"></td>
            </tr>
            <tr style={{height: 44}}>
              <td className="u-border-1 u-border-grey-30 u-first-column u-grey-5 u-table-cell u-table-cell-10">Total Fat</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell">34</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell">18</td>
            </tr>
            <tr style={{height: 44}}>
              <td className="u-border-1 u-border-grey-30 u-first-column u-grey-5 u-table-cell u-table-cell-13">carbs</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell">234</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell">8&nbsp;</td>
            </tr>
            <tr style={{height: 44}}>
              <td className="u-border-1 u-border-grey-30 u-grey-5 u-table-cell u-table-cell-16">Dietary Fiber</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell">4</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell"></td>
            </tr>
            <tr style={{height: 44}}>
              <td className="u-border-1 u-border-grey-30 u-grey-5 u-table-cell u-table-cell-19">Protein</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell">56</td>
              <td className="u-border-1 u-border-grey-30 u-table-cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <img className="u-image u-image-default u-image-1" src={applePng} alt="" data-image-width="1600" data-image-height="1259"/>
    </div>
  </section> );
}
 
export default FoodDetails;