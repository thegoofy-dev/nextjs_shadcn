"use client";


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ResponsiveAreaBump } from '@nivo/bump'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyResponsiveAreaBump = ({data}:{ data: any }) => (
    <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        startLabel={(datum) => datum.id} 
        endLabel={(datum) => datum.id}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        theme={{
            axis: {
                ticks: {
                    text: {
                        fill: "#A19C96", // ✅ Year label color
                        fontSize: 14,
                    },
                },
            },
            tooltip: {
                container: {
                    background: "black",
                    color: "white",
                    fontSize: 12,
                    padding: 8,
                    borderRadius: 4,
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
                },
            },
        }}
    />
)

export default function General() {

    const data = [
        {
            "id": "JavaScript",
            "data": [
                {
                    "x": 2000,
                    "y": 11
                },
                {
                    "x": 2001,
                    "y": 13
                },
                {
                    "x": 2002,
                    "y": 26
                },
                {
                    "x": 2003,
                    "y": 23
                },
                {
                    "x": 2004,
                    "y": 18
                },
                {
                    "x": 2005,
                    "y": 24
                }
            ]
        },
        {
            "id": "ReasonML",
            "data": [
                {
                    "x": 2000,
                    "y": 11
                },
                {
                    "x": 2001,
                    "y": 30
                },
                {
                    "x": 2002,
                    "y": 27
                },
                {
                    "x": 2003,
                    "y": 26
                },
                {
                    "x": 2004,
                    "y": 24
                },
                {
                    "x": 2005,
                    "y": 23
                }
            ]
        },
        {
            "id": "TypeScript",
            "data": [
                {
                    "x": 2000,
                    "y": 27
                },
                {
                    "x": 2001,
                    "y": 22
                },
                {
                    "x": 2002,
                    "y": 21
                },
                {
                    "x": 2003,
                    "y": 11
                },
                {
                    "x": 2004,
                    "y": 14
                },
                {
                    "x": 2005,
                    "y": 27
                }
            ]
        },
        {
            "id": "Elm",
            "data": [
                {
                    "x": 2000,
                    "y": 25
                },
                {
                    "x": 2001,
                    "y": 24
                },
                {
                    "x": 2002,
                    "y": 30
                },
                {
                    "x": 2003,
                    "y": 19
                },
                {
                    "x": 2004,
                    "y": 25
                },
                {
                    "x": 2005,
                    "y": 28
                }
            ]
        },
        {
            "id": "CoffeeScript",
            "data": [
                {
                    "x": 2000,
                    "y": 15
                },
                {
                    "x": 2001,
                    "y": 12
                },
                {
                    "x": 2002,
                    "y": 29
                },
                {
                    "x": 2003,
                    "y": 30
                },
                {
                    "x": 2004,
                    "y": 27
                },
                {
                    "x": 2005,
                    "y": 29
                }
            ]
        }
    ]
    return (
        <Card className='min-w-2xs w-full'>
            <CardHeader>
                <CardTitle>This Year</CardTitle>
                <CardDescription>Mosted Used One&apos;s</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 h-[430px]">
                <MyResponsiveAreaBump data={data} />
            </CardContent>
        </Card>
    );
}