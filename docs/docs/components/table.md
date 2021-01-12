---
title: Table
sidebar_label: Table
slug: /table
---

Tables include default styles for tables and data sets.

<table class="table table-scroll table-striped table-hover shadow-2 my-12">
    <thead>
        <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Release date</th>
        </tr>
    </thead>
    <tbody>
        <tr class="data-table-tr">
            <td>The Shawshank Redemption</td>
            <td>Crime, Drama</td>
            <td>14 October 1994</td>
        </tr>
        <tr>
            <td>The Godfather</td>
            <td>Crime, Drama</td>
            <td>24 March 1972</td>
        </tr>
        <tr>
            <td>Schindler's List</td>
            <td>Biography, Drama, History</td>
            <td>4 February 1994</td>
        </tr>
        <tr>
            <td>Se7en</td>
            <td>Crime, Drama, Mystery</td>
            <td>22 September 1995</td>
        </tr>
        <tr>
            <td>The Shawshank Redemption</td>
            <td>Crime, Drama</td>
            <td>14 October 1994</td>
        </tr>
        <tr  class="active">
            <td>The Godfather</td>
            <td>Crime, Drama</td>
            <td>24 March 1972</td>
        </tr>
        <tr>
            <td>Schindler's List</td>
            <td>Biography, Drama, History</td>
            <td>4 February 1994</td>
        </tr>
        <tr>
            <td>Se7en</td>
            <td>Crime, Drama, Mystery</td>
            <td>22 September 1995</td>
        </tr>
    </tbody>
</table>

|  class        | element | descrition   |
| ------------- | ------  | ------------ |
| table         | table   | apply table. |
| table-striped | table   | apply zebra striped style table. |
| table-hover   | table   | apply hoverable.|
| active        | div     | to active row. in tr child div. |
| table-scroll  | table   | horizontally scrollable table.|
| &lt;color&gt;-text   | tr      | to apply active color. |

```html
<table class="data-table table-scroll table-striped table-hover">
  <thead>
    <tr>
      <th>name</th>
      <th>genre</th>
      <th>release date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <td>The Shawshank Redemption</td>
      <td>Crime, Drama</td>
      <td>14 October 1994</td>
    </tr>
  </tbody>
</table>
```